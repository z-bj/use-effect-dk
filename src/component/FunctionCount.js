import React, { useState, useEffect } from "react";

function FunctionCount() {
  useEffect(() => {
    setTimeout(() => {
      document.title = `you have clicked ${count} times`;
    }, 5000);

    // document.title = `you have clicked ${count} times`;
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default FunctionCount;
