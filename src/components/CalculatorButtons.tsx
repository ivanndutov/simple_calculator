import React from "react";
import DigitButton from "./DigitButton";
import FunctionalButton from "./FunctionalButton";

interface CalculatorButtonsProps {
  input: string;
  setInput: (input: string) => void;
  handleCommandStack: (...commands: string[]) => void;
}

const CalculatorButtons: React.FC<CalculatorButtonsProps> = ({
  input,
  setInput,
  handleCommandStack,
}) => {
  return (
    <div className="my-2 grid grid-cols-4 grid-rows-4 gap-6">
      <DigitButton value={1} input={input} setInput={setInput} />
      <DigitButton value={2} input={input} setInput={setInput} />
      <DigitButton value={3} input={input} setInput={setInput} />
      <FunctionalButton
        input={input}
        setInput={setInput}
        func="+"
        pushStack={handleCommandStack}
      />
      <DigitButton value={4} input={input} setInput={setInput} />
      <DigitButton value={5} input={input} setInput={setInput} />
      <DigitButton value={6} input={input} setInput={setInput} />
      <FunctionalButton
        input={input}
        setInput={setInput}
        func="-"
        pushStack={handleCommandStack}
      />
      <DigitButton value={7} input={input} setInput={setInput} />
      <DigitButton value={8} input={input} setInput={setInput} />
      <DigitButton value={9} input={input} setInput={setInput} />
      <FunctionalButton
        input={input}
        setInput={setInput}
        func="*"
        pushStack={handleCommandStack}
      />
      <FunctionalButton
        input={input}
        setInput={setInput}
        func="."
        pushStack={handleCommandStack}
      />
      <DigitButton value={0} input={input} setInput={setInput} />
      <FunctionalButton
        input={input}
        setInput={setInput}
        func="="
        pushStack={handleCommandStack}
      />
      <FunctionalButton
        input={input}
        setInput={setInput}
        func="/"
        pushStack={handleCommandStack}
      />
    </div>
  );
};

export default CalculatorButtons;
