import React from "react";
import './index.scss';

const Counter = () => {
  const [count, setCount] = React.useState(0)

  // let count = 0;

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    if (count === 0 ) {
      return false;
    } 
    setCount(count - 1);
  }

  return (
    <div className="Counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button type="button" disabled={count > 0 ? false : true} onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default Counter;