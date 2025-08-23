import useDarkMode from "./useDarkMode";

export default function App(){
  const[isDark, toggle] = useDarkMode();

  return(
    <div style = {{padding: 24}}>
    <h1>Dark mode connected? {String(isDark)}</h1>
    <button onClick={toggle}>Toggle</button>



    </div>

  );
}