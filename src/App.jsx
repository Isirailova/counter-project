import React, { useState } from "react";
import CounterTen from "./components/counterTen/CounterTen";
import "./App.css";

function App() {
  //const count = 0;
  const [count, setCount] = useState(1);

  const onMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPlusClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const showMessage = () => {
    if (count < 10 && count > 0) {
      return <p>Keep it going...</p>;
    } else if (count === 10) {
      return <p>Reachhed Max!</p>;
    } else if (!count) {
      return <p>Reached Min!</p>;
    }

    // -------------Ternary Operator-----------
    // const showMessage = () => (
    //   count < 10 && count > 0
    //     ? <p>Keep it going...</p>
    //     : count === 10
    //       ? <p>Reached Max!</p>
    //       : !count
    //         ? <p>Reached Min!</p>
    //         : null
    // );
  };

  return (
    <div className="counter">
      <div className="button-group">
        <button onClick={onMinusClick}> - </button>
        <p>{count}</p>
        <button onClick={onPlusClick}> + </button>
      </div>
      {showMessage()}

      <CounterTen />
    </div>
  );
}

export default App;
