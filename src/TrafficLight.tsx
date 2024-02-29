import { useMemo } from "react";
import styles from "./App.module.css";

interface Props {
  state: {
    value: number;
    label: string
  }
}

// simple enum so we can determine which light value is which
enum LIGHTS {
  RED = 0,
  YELLOW = 1,
  GREEN = 2,
}

// this component renders a fun traffic light, the light is controlled by the state.value prop
const TrafficLight = ({ state }: Props) => {

  // get the value and then determine which light should be active
  // since the counter can wrap around, we want to do a mod 3 so the range always stays between 0 and 3
  // calling Math.absolute handles the negative case, basically moves the lights backwards
  // there are other ways to handle that case, this was just the first and quickest thing I thought of!
  const activeLight = useMemo(() => Math.abs(state.value % 3), [state.value]);

  return (
    <>
    <h3>{state.label}</h3>
    <div className={styles.trafficLight}>
      {/* 
        using the active light variable above to determine which light is active
        There is probably a better way to optimize this but this was the first thing I thought of
        I'm sure I'll think of a better way right after I submit this :)
      */}
      <div className={styles.light + ` ${activeLight === LIGHTS.RED ? styles.red : ""}`}></div>
      <div className={styles.light + ` ${activeLight === LIGHTS.YELLOW ? styles.yellow : ""}`}></div>
      <div className={styles.light + ` ${activeLight === LIGHTS.GREEN ? styles.green : ""}`}></div>
    </div>
    </>
  )

};

export default TrafficLight;
