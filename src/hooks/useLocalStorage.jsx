import { useEffect, useState } from "react"


const useLocalStorage = (key, initialValue) => {
    const[element, setElement] = useState(initialValue);

    useEffect(()=>{
        if(element){
            localStorage.setItem(key, JSON.stringify(element))
        }
    },[element])

    useEffect(()=>{
        const storedElement = localStorage.getItem(key);
        setElement(storedElement ? JSON.parse(storedElement) : initialValue);
    },[])

    const clear = () => {
        localStorage.clear();
      };

    return [element, setElement, clear];
}

export default useLocalStorage