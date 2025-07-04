import { forwardRef } from "react";

const ResultModal = forwardRef(({ result, targetTime }, reference) => {
  return (
    <dialog ref={reference} className="result-modal">
      <h2>{result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
