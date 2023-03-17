import React from "react";

interface Props {
  tipAmount: string;
  totalPerPerson: string;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}
export default function Output(p: Props) {
  const { tipAmount, totalPerPerson, setBill, setTip } = p;
  return (
    <>
      <div id="output" aria-live="polite">
        <div className="output-numbers">
          <p id="tip-person">
            Tip Amount
            <br />
            <span>/ person</span>
          </p>
          <p id="tipSum">
            {tipAmount === "NaN" || tipAmount === "Infinity"
              ? "0.00"
              : tipAmount}
          </p>
        </div>
        <div className="output-numbers totalOutput">
          <p id="total-person">
            Total
            <br />
            <span>/ person</span>
          </p>
          <p id="totalSum">
            {totalPerPerson === "NaN" || totalPerPerson === "Infinity"
              ? "0.00"
              : totalPerPerson}
          </p>
        </div>
        <input
          type="reset"
          value="Reset"
          id="reset"
          name="reset"
          className="empty"
          onClick={() => {
            setBill(0);
            setTip(0);
          }}
        />
        <label className="hide-visually">Reset</label>
      </div>
    </>
  );
}
