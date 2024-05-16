import React from "react";

import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useState } from "react";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const App = () => {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    const updateValue = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updateValue);
  };

  const handleDecrement = (counterId) => {
    const updateValue = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updateValue);
  };

  const handleReset = (counterId) => {
    const updateValue = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: 0,
        };
      }
      return counter;
    });
    setCounters(updateValue);
  };

  return (
    <>
      <div className="w-screen h-screen p-10 bg-[#13162b] text-white">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Counter Application
        </h1>
        <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((counter) => (
            <Counter
              count={counter.value}
              key={counter.id}
              increment={() => handleIncrement(counter.id)}
              reset={() => handleReset(counter.id)}
              decrement={() => handleDecrement(counter.id)}
            />
          ))}
          <Stats totalCount={totalCount} />
        </div>
      </div>
    </>
  );
};

export default App;
