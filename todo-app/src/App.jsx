import { useState } from 'react';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#999' : '#000',
            }}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggle(todo.id);
              }}
              style={{ marginLeft: '10px' }}
            >
              Completed
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
