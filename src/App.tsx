import { useCallback, useState } from "react";
import styles from "./App.module.css";
import Counter from "./Counter";
import TrafficLight from "./TrafficLight";

const App = () => {

  // since we are rendering 2 Counters, we need to have separate state for each
  const [counter1Value, setCounter1Value] = useState(0);
  const [counter2Value, setCounter2Value] = useState(0);

  // Total Counter clicks refers to any time the user clicks any button in either counter
  const [totalCounterClicks, setTotalCounterClicks] = useState(0);

  // Wrapping our increment/decrement functions in useCallback to prevent extra re-renders
  const counter1Increment = useCallback(() => {
    setCounter1Value((prevState) => prevState + 1);
    setTotalCounterClicks((prevState) => prevState + 1);
  }, []);
  const counter1Decrement = useCallback(() => {
    setCounter1Value((prevState) => prevState - 1);
    setTotalCounterClicks((prevState) => prevState + 1);
  }, []);

  const counter2Increment = useCallback(() => {
    setCounter2Value((prevState) => prevState + 1);
    setTotalCounterClicks((prevState) => prevState + 1);
  }, []);
  const counter2Decrement = useCallback(() => {
    setCounter2Value((prevState) => prevState - 1);
    setTotalCounterClicks((prevState) => prevState + 1);
  }, []);



  return (
    <div className={styles.app}>

      <h1>Ranveer Dhaliwal</h1>

      <div className={styles.counterRow}>
        {/* render the total clicks then 2 different counters */}
        <h3>Total Clicks: {totalCounterClicks}</h3>
        <Counter
          value={counter1Value} 
          increment={counter1Increment}
          decrement={counter1Decrement}
        />
        <Counter
          value={counter2Value} 
          increment={counter2Increment}
          decrement={counter2Decrement}
        />
      </div>

      {/* The traffic light is currently hooked up to counter 1 */}
      <div className={styles.trafficLightRow}>
        <TrafficLight state={{ value: counter1Value, label: "Traffic Light (hooked up to first counter)" }} />
      </div>


    </div>
  )
};

export default App;
