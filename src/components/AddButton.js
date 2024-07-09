import React, { useState, useEffect } from "react";

const AddButton = () => {
  const gotCounter = localStorage.getItem('counter');
  const storedCounter = gotCounter ? Number(gotCounter) : 0;
  const [counter, setCounter] = useState(storedCounter);

  useEffect(() => {
    // alert('reloaded!')
    localStorage.setItem('counter', counter);
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter(counter => counter + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter => counter > 0 ? counter - 1 : 0)}>-</button>
    </div>
  );
}

export default AddButton;