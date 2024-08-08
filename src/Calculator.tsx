import React, { useEffect, useState } from "react";
import CalculatorButtons from "./components/CalculatorButtons";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("0");

  const [commandStack, setCommandStack] = useState<string[]>([]);

  const handleCommandStack = (...commands: string[]) => {
    setCommandStack([...commandStack, ...commands]);
  };

  useEffect(() => {
    if (commandStack.length === 0) {
      return; // No commands to process
    }

    const lastCommand = commandStack[commandStack.length - 1];

    if (lastCommand === ".") {
      if (input.includes(".")) {
        alert("There can't be more than 1 dot!");
        return;
      }
      setInput(input + ".");
      setCommandStack((prevStack) => prevStack.slice(0, -1)); // Remove the dot command from stack
    } else if (lastCommand === "=") {
      if (commandStack.length === 1 || commandStack.length === 2) {
        setInput("0");
        setCommandStack([]);
        return; // Only the "=" command, nothing to evaluate
      }
      try {
        const expression = commandStack.slice(0, -1).join("");
        const result = eval(expression);
        handleInput(result);
      } catch (error) {
        console.error("Error evaluating expression:", error);
        setInput("Error");
      }
      setCommandStack([]); // Clear the command stack after evaluation
    } else {
      // Handle other commands or reset input if necessary
      setInput("0"); // Reset input for commands other than "." and "="
    }
  }, [commandStack]); // Include input in the dependency array

  const handleInput = (handledInput: string) => {
    const newInput = String(Number(handledInput));
    if (newInput.length > 8) {
      alert("Number is too large! Taking it back...");
      setInput("0");
    } else {
      setInput(newInput);
    }
  };

  return (
    <div className="w-auto h-auto flex flex-col bg-primary py-5 px-5 rounded-3xl shadow-custom">
      <div className="input w-auto h-auto bg-functional p-3 m-2 rounded-3xl">
        <p className="text-right">{input}</p>
      </div>
      <CalculatorButtons
        input={input}
        setInput={handleInput}
        handleCommandStack={handleCommandStack}
      />
    </div>
  );
};

export default Calculator;
