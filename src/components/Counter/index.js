import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/filterSlice';
import './index.scss';

const Counter = () => {
  // const [count, setCount] = React.useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button
          className="minus"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button className="plus" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
