import React from "react";

interface TB2 extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button2: React.FC<TB2> = ({ text, ...props }) => {
  return <button {...props}>{text}</button>;
};

export default Button2;
