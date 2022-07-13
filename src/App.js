import { useState } from "react";

const App = () => {
  const [calculator, setCalculator] = useState("");
  const [result, setResult] = useState("");
  const operators = ["/", "-", "+", "*", "."];

  const updateValue = (inputValue) => {
    if (
      (operators.includes(inputValue) && calculator === "") ||
      (operators.includes(inputValue) &&
        operators.includes(calculator.slice(-1)))
    ) {
      return;
    }
    setCalculator(calculator + inputValue);

    if (!operators.includes(inputValue)) {
      setResult(eval(calculator + inputValue).toString());
    }
  };

  const createNumbers = () => {
    let numbersArray = [];
    for (let i = 1; i < 10; i++) {
      numbersArray.push(
        <button
          onClick={() => updateValue(i.toString())}
          className="  border-none outline-none p-4 text-gray-50 cursor:pointer flex flex-row basis-1/3 text-2xl duration-300  hover:opacity-25"
          key={i}
        >
          {i}
        </button>
      );
    }
    return numbersArray;
  };
  //calcute values
  const calculatedResult = () => {
    setCalculator(eval(calculator).toString());
  };

  //delete values
  const clearValues = () => {
    if (calculator == "") {
      return;
    }
    const value = calculator.slice(0, -1);
    setCalculator(value);
  };
  return (
    <div className=" bg-gray-100 flex flex-col justify-center text-center items-center h-screen">
      <div className=" w-[400px] bg-gray-100 rounded-3xl  text-center   ">
        <div className=" bg-black  rounded-t-3xl text-gray-50 text-right p-4 text-2xl">
          {result ? (
            <span className="text-gray-600 text-[14px]">({result})</span>
          ) : (
            ""
          )}
          {calculator || 0}
        </div>
        <div className="operators">
          <button
            onClick={() => updateValue("/")}
            className=" rounded-full  border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            /
          </button>

          <button
            onClick={() => updateValue("+")}
            className=" rounded-full border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            +
          </button>
          <button
            onClick={() => updateValue("-")}
            className=" rounded-full border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            -
          </button>
          <button
            onClick={() => updateValue("*")}
            className=" rounded-full border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            *
          </button>
          <button
            onClick={clearValues}
            className=" rounded-full  border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            Clear
          </button>
        </div>

        <div className="digits flex flex-wrap bg-black p-4">
          {createNumbers()}
          <button
            onClick={() => updateValue("0")}
            className=" border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300 hover:opacity-25"
          >
            0
          </button>
          <button
            onClick={() => updateValue(".")}
            className="border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            .
          </button>
          <button
            onClick={calculatedResult}
            className="border-none outline-none p-4 text-gray-50 cursor:pointer text-2xl duration-300  hover:opacity-25"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
