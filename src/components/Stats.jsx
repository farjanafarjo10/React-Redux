import React from "react";

const Stats = ({ totalCount }) => {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-[#0087ff] rounded shadow-xl">
      <div className="text-2xl font-semibold">Total Count: {totalCount}</div>
    </div>
  );
};

export default Stats;
