"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/features/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">Count: {count}</h2>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-400 text-white px-3 py-1 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
