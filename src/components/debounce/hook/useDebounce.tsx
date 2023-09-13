import { useState } from "react";

export const useDebounce = (): {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
} => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setValue(e.target.value);
    }, 3000);
  };
  return { handleChange, value };
};
