import { useState } from "react";

const useCounter = (value) => {
    const [count, setCount] = useState(value);
    function Increment(){
        console.log("Increment");
        setCount(count + 1);
      }
      function Decrement(){
        console.log("Decrement");
        if(count > 0)
            setCount(count - 1);
      }
  return [count, Increment, Decrement];
}

export default useCounter