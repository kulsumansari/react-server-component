import { useState, useTransition } from 'react';

let likeCount=0;
export async function incrementCount() {
  likeCount++;
  return likeCount;
}

export async function decrementCount() {
  likeCount--;
  return likeCount;
}
// using server actions
function Counter() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    startTransition(async () => {
      const currentCount = await incrementCount();
      setCount(currentCount);
    });
  };

  const decrementHandler = () => {
    startTransition(async () => {
      const currentCount = await decrementCount();
      setCount(currentCount);
    });
  };

  return (
    <>
      <p>Hit Counts: {count}</p>
      <button onClick={incrementHandler} disabled={isPending}>+</button>
      <button onClick={decrementHandler} disabled={isPending}>-</button>
    </>
  );
}

export default Counter;
