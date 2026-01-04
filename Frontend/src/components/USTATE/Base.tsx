import { useState } from "react";

const Base = () => {
  const [count, setCount] = useState<number>(0);
  const onClickHandlerInc = () => {
    setCount(count+1);
  }
  const onClickHandlerDec = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <div className=" flex flex-row gap-5 align-content-center">
        <button onClick={onClickHandlerInc} className="border p-2">
          Increase
        </button>
        <button onClick={onClickHandlerDec} className="border p-2">
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Base;
