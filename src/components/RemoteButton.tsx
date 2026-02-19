import { useState } from "react";

export default function RemoteButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Remote Button - {count}</button>
  );
}
