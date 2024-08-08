import React from "react";

interface FunctionalButtonProps {
  input: string;
  setInput: (input: string) => void;
  func: string;
  pushStack: (...items: string[]) => void;
}

const FunctionalButton: React.FC<FunctionalButtonProps> = ({
  input,
  func,
  pushStack,
}) => {
  return (
    <div
      className="min-w-10 min-h-10 px-5 bg-functional aspect-square cursor-pointer rounded-2xl"
      onClick={() => pushStack(input, func)}
    >
      <p className="text-center align-middle ">{func}</p>
    </div>
  );
};

export default FunctionalButton;
