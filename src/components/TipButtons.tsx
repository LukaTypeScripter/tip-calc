import React from "react";
interface Props {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
}
export default function TipButtons(p: Props) {
  const { setTip, tip } = p;
  return (
    <>
      <div className="btn-cont">
        <input
          type="radio"
          name="tipChoice"
          id="tip5"
          value={tip}
          className="tipPercent"
          onClick={() => {
            setTip(0.05);
          }}
        />
        <label className="tip-label">5%</label>
      </div>
      <div className="btn-cont">
        <input
          type="radio"
          name="tipChoice"
          id="tip10"
          value={tip}
          className="tipPercent"
          onClick={() => {
            setTip(0.1);
          }}
        />
        <label className="tip-label">10%</label>
      </div>
      <div className="btn-cont">
        <input
          type="radio"
          name="tipChoice"
          id="tip15"
          value={tip}
          className="tipPercent"
          onClick={() => {
            setTip(0.15);
          }}
        />
        <label className="tip-label">15%</label>
      </div>
      <div className="btn-cont">
        <input
          type="radio"
          name="tipChoice"
          id="tip25"
          value={tip}
          className="tipPercent"
          onClick={() => {
            setTip(0.25);
          }}
        />
        <label className="tip-label">25%</label>
      </div>
      <div className="btn-cont">
        <input
          type="radio"
          name="tipChoice"
          id="tip50"
          value={tip}
          className="tipPercent"
          onClick={() => {
            setTip(2);
          }}
        />
        <label className="tip-label">50%</label>
      </div>
      <div className="btn-cont customBtn">
        <input
          type="number"
          name="custom"
          id="customInput"
          className="tipPercent custom"
          min="0"
          max="100"
          placeholder="Custom"
          value={tip * 100}
          onChange={(e) => {
            setTip(e.target.valueAsNumber / 100);
          }}
        />
        {/* <input type="text" id="custom" name="tipChoice" className="tipPercent"/>
    <label  className="tip-label" id="custom-label">Custom</label>
    <label >Custom</label> */}
      </div>
    </>
  );
}
