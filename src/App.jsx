import { useState } from "react";
import "./App.css";
import { Monitor } from "./Components";
import { Button } from "./Components";

function App() {
  const [value, setValue] = useState("0");
  const [isResult, setIsResult] = useState(false); // Track if the displayed value is a result

  // Handle input based on the button's value
  const handleClick = (buttonValue) => {
    if (buttonValue === "AC") {
      setValue("");
      setIsResult(false);
      return;
    }

    if (buttonValue === "DE") {
      setValue(value.slice(0, -1));
      return;
    }

    if (buttonValue === "=") {
      try {
        const result = eval(value); // Evaluate the current expression
        setValue(formatNumber(result)); // Format and display the result
        setIsResult(true);
      } catch (error) {
        setValue("Error");
        setIsResult(true);
      }
      return;
    }

    // Continue the same logic for other buttons
    if (isResult && ["+", "-", "*", "/"].includes(buttonValue)) {
      setValue(value + buttonValue);
      setIsResult(false);
    } else if (isResult) {
      setValue(buttonValue);
      setIsResult(false);
    } else {
      setValue(value + buttonValue);
    }
  };

  const formatNumber = (num) => {
    return num.toLocaleString("de-DE");
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <Monitor value={value}></Monitor>
          <div>
            <Button value="AC" onButtonClick={handleClick} isColorRed={true} />
            <Button
              value="DE"
              onButtonClick={handleClick}
              isColorGreen={true}
            />
            <Button value="." onButtonClick={handleClick} />
            <Button value="/" onButtonClick={handleClick} />
          </div>
          <div>
            <Button value="7" onButtonClick={handleClick} />
            <Button value="8" onButtonClick={handleClick} />
            <Button value="9" onButtonClick={handleClick} />
            <Button value="*" onButtonClick={handleClick} />
          </div>
          <div>
            <Button value="4" onButtonClick={handleClick} />
            <Button value="5" onButtonClick={handleClick} />
            <Button value="6" onButtonClick={handleClick} />
            <Button value="+" onButtonClick={handleClick} />
          </div>
          <div>
            <Button value="1" onButtonClick={handleClick} />
            <Button value="2" onButtonClick={handleClick} />
            <Button value="3" onButtonClick={handleClick} />
            <Button value="-" onButtonClick={handleClick} />
          </div>
          <div>
            <Button value="00" onButtonClick={handleClick} />
            <Button value="0" onButtonClick={handleClick} />
            <Button value="=" onButtonClick={handleClick} isEqualSign={true} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
