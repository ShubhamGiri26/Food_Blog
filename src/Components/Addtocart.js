import React, { useState } from "react";

const Addtocart = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </>
  );
};

export default Addtocart;