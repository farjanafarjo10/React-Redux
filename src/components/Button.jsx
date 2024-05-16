import React from "react";

const Button = ({ heandle, type, childern }) => {
  const style =
    type === "reset"
      ? "bg-green-500 text-white px-3 py-2 rounded shadow"
      : type === "increment"
      ? "bg-blue-500 text-white px-3 py-2 rounded shadow"
      : "bg-red-500 text-white px-3 py-2 rounded shadow";

  return (
    <div>
      <button onClick={heandle} className={style}>
        {childern}
      </button>
    </div>
  );
};

export default Button;
