import React from "react";

interface DigitButtonProps {
  value: number;
  input: string;
  setInput: (input: string) => void;
}
const DigitButton: React.FC<DigitButtonProps> = ({
  value,
  input,
  setInput,
}) => {
  return (
    <button
      className="min-w-10 min-h-10 px-5 bg-secondary aspect-square rounded-2xl"
      onClick={(e) => setInput(input + (e.target as HTMLElement).innerText)}
    >
      <p className="text-center align-middle">{value}</p>
    </button>
  );
};

export default DigitButton;
