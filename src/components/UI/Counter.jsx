import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function incrHandl() {
    setCounter(counter + 1);
  }
  function decrHandl() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrHandl}>Increment</button>
      <button onClick={decrHandl}>Decrement</button>
    </>
  );
};

export default Counter;
