import React from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-[#191c37] rounded shadow-2xl shadow-[#72727233]">
      <Count count={count} />

      <div className="flex space-x-3">
        <Button type="increment" heandle={increment} childern="Increment" />
        <Button type="reset" heandle={reset} childern="Reset" />
        <Button type="decrement" heandle={decrement} childern="Decrement" />
      </div>
    </div>
  );
};

export default Counter;
