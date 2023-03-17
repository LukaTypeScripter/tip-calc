import React from "react";
import TipButtons from "./TipButtons";
interface Props {
  tip: number;
  peopleError: string;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}
export default function Input(p: Props) {
  const { setBill, setTip, peopleError, setPeople, tip } = p;
  return (
    <>
      <div className="bill-cont">
        <label>Bill</label>
        <div className="bill-input-cont">
          <img src="images/icon-dollar.svg" alt="" aria-hidden="true" />
          <input
            type="number"
            id="bill"
            name="bill"
            placeholder="0"
            onChange={(e) => {
              setBill(e.target.valueAsNumber);
            }}
          />
        </div>
      </div>
      <fieldset id="select-tip">
        <legend>Select tip</legend>
        <div id="btn-container">
          <TipButtons setTip={setTip} tip={tip} />
        </div>
      </fieldset>
      <div className="people-cont">
        <label className="people">
          Number of people
          <span id="warning">{peopleError}</span>
        </label>
        <div className="people-input-cont">
          <img src="images/icon-person.svg" alt="" aria-hidden="true" />
          <input
            type="number"
            name="number-people"
            id="number-people"
            placeholder="0"
            min="0"
            max="100"
            step="1"
            className="ja "
            onChange={(e) => {
              setPeople(e.target.valueAsNumber);
            }}
            onKeyDown={(e) => {
              if (e.key === ".") {
                e.preventDefault();
              }
            }}
          />
        </div>
      </div>
    </>
  );
}
