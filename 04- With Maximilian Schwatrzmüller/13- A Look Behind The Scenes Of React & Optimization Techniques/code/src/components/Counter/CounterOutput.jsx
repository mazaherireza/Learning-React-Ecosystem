import { log } from "@/log.js";

const CounterOutput = ({ value }) => {
  log("<CounterOutput /> rendered", 2);
  const cssClass = value >= 0 ? "counter-output" : "counter-output negative";
  return <span className={cssClass}>{value}</span>;
};

export default CounterOutput;
