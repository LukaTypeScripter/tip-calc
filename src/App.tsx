import React, { useEffect, useState } from 'react';

import './App.css';
import logoSvg from "./images/logo.svg"
function App() {

  const [bill,setBill] = useState<number>(0) 
  const [tip,setTip] = useState<number>(0)
  const [people,setPeople] = useState<number>(0)
  const [peopleError, setPeopleError] = useState<string>("")
  var tipAmount = ((bill * tip) / people).toFixed(2);
  const totalPerPerson = ((bill * (1+tip))/people).toFixed(2);
 
useEffect(() => {
  if(people === 0) {
      setPeopleError("cant't be zero")
  }else{
    setPeopleError("")
  }
},[people])
 
 
  console.log(bill,tip,people);
  

  return (
    <div>
     <header>
    <img src={logoSvg} alt="logo" id='logo'/>
  </header>
  <main>
    <form >
      <div id="input">
        <div className="bill-cont">
          <label >Bill</label>
          <div className="bill-input-cont">
            <img src="images/icon-dollar.svg" alt="" aria-hidden="true"/>
            <input type="number" id="bill" name="bill" placeholder="0" onChange={(e) => {
              setBill(e.target.valueAsNumber)
            }}/>
          </div>
        </div>
        <fieldset id="select-tip">
          <legend>Select tip</legend>
          <div id="btn-container">
              <div className="btn-cont">
              <input type="radio" name="tipChoice" id="tip5" value={tip} className="tipPercent" onClick={() => {
                    setTip(0.05)
                  }}/>
                  <label  className="tip-label" >5%</label>
                </div>
                <div className="btn-cont">
                  <input type="radio" name="tipChoice" id="tip10" value={tip} className="tipPercent" onClick={() => {
                    setTip(0.1)
                  }}/>
                  <label  className="tip-label" >10%</label>
                </div>
                <div className="btn-cont">
                  <input type="radio" name="tipChoice" id="tip15" value={tip} className="tipPercent" onClick={() => {
                    setTip(0.15)
                  }}/>
                  <label  className="tip-label">15%</label>
                </div>
                <div className="btn-cont">
                  <input type="radio" name="tipChoice" id="tip25" value={tip} className="tipPercent" onClick={() => {
                    setTip(0.25)
                  }}/>
                  <label  className="tip-label">25%</label>
                </div>
                <div className="btn-cont">
                  <input type="radio" name="tipChoice" id="tip50" value={tip} className="tipPercent" onClick={() => {
                    setTip(2)
                  }}/>
                  <label  className="tip-label">50%</label>
                </div>
                <div className="btn-cont customBtn">
                    <input type="number" name="custom" id="customInput" className="tipPercent custom" 
                    min="0" max="100" placeholder="Custom" value={tip * 100} onChange={(e) => {
                      setTip(e.target.valueAsNumber / 100)
                         
                    }}/>
                    {/* <input type="text" id="custom" name="tipChoice" className="tipPercent"/>
                    <label  className="tip-label" id="custom-label">Custom</label>
                    <label >Custom</label> */}
                </div>
          </div>
        </fieldset>
        <div className="people-cont">
          <label  className="people">Number of people 
            <span id="warning">{peopleError}</span>
          </label>
          <div className="people-input-cont">
            <img src="images/icon-person.svg" alt="" aria-hidden="true"/>
            <input type="number" name="number-people" id="number-people" placeholder="0"  min="0" max="100"  step="1"  className="ja " onChange={(e) => {
              setPeople(e.target.valueAsNumber)
            }}
            onKeyDown={(e) => {
              if(e.key === "."){
                e.preventDefault()
              }
            }}
            
            />
            </div>
        </div>
      </div>
      <div id="output" aria-live="polite">
        <div className="output-numbers">
          <p id="tip-person">Tip Amount<br/><span>/ person</span></p>
          <p id="tipSum" >{tipAmount === 'NaN' || tipAmount === 'Infinity' ? "0.00" : tipAmount}</p>
        </div>
        <div className="output-numbers totalOutput">
          <p id="total-person">Total<br/><span>/ person</span></p>
          <p id="totalSum" >{totalPerPerson === 'NaN' || totalPerPerson === 'Infinity' ? "0.00" : totalPerPerson}</p>
        </div>
        <input type="reset" value="Reset" id="reset" name="reset" className="empty" onClick={() => {
          setBill(0)
          setTip(0)
        }}/>
        <label  className="hide-visually">Reset</label>
      </div>
    </form>
  </main>
  


          </div>
     
    
  );
}

export default App;
