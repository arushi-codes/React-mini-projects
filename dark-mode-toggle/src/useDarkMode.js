import {useState, useEffect } from "react";

export default function useDarkMode(){
    const[isDark, setIsDark] = useState(() => {
    
   const stored = localStorage.getItem("theme");
   if(stored === "dark") return true;
   if(stored === "light") return false;

  


    });


                                                       
    const toggle = () => setIsDark((prev) => !prev);
     
    useEffect(() =>{
        document.body.classList.toggle("dark", isDark);
    

    localStorage.setItem("theme", isDark? "dark":"light");
    }, [isDark]);

    return [isDark, toggle];
}