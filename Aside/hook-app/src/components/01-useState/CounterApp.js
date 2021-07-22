import { useState } from "react";

const CounterApp = () => {
  const [{ counter1, counter2 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });
  return (
    <div className="bg-light p-3">
      <h2 className="text-center">Counter {counter1}</h2>
      <h2 className="text-center">Counter {counter2}</h2>
      <button
        onClick={() =>
          setCounter((counts) => ({ ...counts, counter1: counts.counter1 + 1 }))
        }
        className="btn btn-primary"
      >
        Add to Counter 1
      </button>
      <button
        onClick={() =>
          setCounter((counts) => ({ ...counts, counter2: counts.counter2 + 1 }))
        }
        className="btn btn-secondary"
      >
        Add to counter 2
      </button>
    </div>
  );
};

export default CounterApp;
