import React, { useState } from 'react';

// Set counter state
const Counter = () => {
  const [count, setCount] = useState(0);

// Directly increment count
  const increment = () => {
    setCount(count + 1);
  };

// Increment count after 2 second delay
  const incrementAfterDelay = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

// Incorrectly increment count w/ 2 direct setters 
  const incrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

// Correctly increment count w/ updater function
  const correctIncrementTwice = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAfterDelay}>Increment After Delay</button>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={correctIncrementTwice}>Correct Increment Twice</button>
    </div>
  );
};

export default Counter;

