import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incCounter = (event) => {
    setCount(count + 1);
  };

  const decCounter = (event) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={incCounter}>+</button>
      <p>{count}</p>
      <button onClick={decCounter}>-</button>
    </div>
  );
};
