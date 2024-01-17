import React, { useState } from "react";
import "./counterTen.style.css";

const CounterTen = () => {
  const [countTen, setCountTen] = useState(0);

  const onTenMinusClick = () => {
    if (countTen > 0) {
      setCountTen(countTen - 10);
    }
  };

  const onTenPlusClick = () => {
    if (countTen < 100) {
      setCountTen(countTen + 10);
    }
  };

  const showMessage2 = () => {
    if (countTen < 100 && countTen > 0) {
      return <p>Keep it going...</p>;
    } else if (countTen === 100) {
      return <p>Reached Max!</p>;
    } else if (!countTen) {
      return <p>Reached Min!</p>;
    }
  };

  return (
    <div className="counterTen">
      <div className="button-group2">
        <button onClick={onTenMinusClick}> - </button>
        <p>{countTen}</p>
        <button onClick={onTenPlusClick}> + </button>
      </div>
      {showMessage2()}
    </div>
  );
};

export default CounterTen;
