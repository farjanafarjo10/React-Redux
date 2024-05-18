import React from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  const handleReset = (counterId) => {
    dispatch(reset(counterId));
  };

  return (
    <>
      <div className="w-screen min-h-[100vh] p-10 bg-[#13162b] text-white">
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
          <Posts />
        </div>
      </div>
    </>
  );
};

export default App;
