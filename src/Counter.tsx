import React from "react";
import styles from "./App.module.css";

interface Props {
  value: number;
  increment: () => void;
  decrement: () => void;
}

// Simple counter component
// takes in a value to display
// and 2 functions to increase and decrease the value - this are assigned to the associated buttons
const Counter = ({value, increment, decrement}: Props) => {
  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={decrement}>-</button>
      <h4 className={styles.label}>{value}</h4>
      <button className={styles.button} onClick={increment}>+</button>
    </div>
  )
};

// Memoize our Counter component since it is stateless
// this will prevent any extra rerenders when its own props don't change
// for example if we render 2 Counters at the same time, changing ones value doesn't trigger re-rendering the other counter
export default React.memo(Counter);
