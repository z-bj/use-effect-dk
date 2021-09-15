import React, { useState, useEffect } from "react";

function FunctionCount() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("mise a jour du titre via useEffect");
    document.title = `you have clicked ${count} times`;
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default FunctionCount;
