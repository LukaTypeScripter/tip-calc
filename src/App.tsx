import React, { useEffect, useState } from "react";

import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import TipButtons from "./components/TipButtons";
import logoSvg from "./images/logo.svg";
function App() {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [peopleError, setPeopleError] = useState<string>("");
  var tipAmount = ((bill * tip) / people).toFixed(2);
  const totalPerPerson = ((bill * (1 + tip)) / people).toFixed(2);

  useEffect(() => {
    if (people === 0) {
      setPeopleError("cant't be zero");
    } else {
      setPeopleError("");
    }
  }, [people]);

  console.log(bill, tip, people);

  return (
    <div>
      <header>
        <img src={logoSvg} alt="logo" id="logo" />
      </header>
      <main>
        <form>
          <div id="input">
            <Input
              setBill={setBill}
              setTip={setTip}
              peopleError={peopleError}
              setPeople={setPeople}
              tip={tip}
            />
          </div>
          <Output
            tipAmount={tipAmount}
            totalPerPerson={totalPerPerson}
            setBill={setBill}
            setTip={setTip}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
