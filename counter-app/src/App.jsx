import useCounter from "./useCounter";

function App(){
    const {count, increment, decrement, reset} = useCounter(0);

    return(
        <div style ={{textAlign: 'center', marginTop: '50px'}}>
         <h2>Counter: {count}</h2>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
         <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;