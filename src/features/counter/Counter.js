import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card mx-auto d-block w-25 shadow rounded-4  border-0">
      <h2 className="card-header bg-success-subtle rounded-top-4 text-success-emphasis">
        Counter Component
      </h2>
      <div className="card-body py-4">
        <h3>{count}</h3>
        <div className="mt-4">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-lg btn-success mx-2  "
            type="button"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-lg btn-danger"
            type="button"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};
