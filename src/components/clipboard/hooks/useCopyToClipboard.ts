import { useState } from "react";

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [value, setValue] = useState("");

  const handleCopy = async (value: string) => {
    setIsCopied(false);
    if (typeof window !== "undefined" && window.navigator.clipboard) {
      await window.navigator.clipboard.writeText(value);
      setValue(value);
      setIsCopied(true);
    }

    // return isCopied ? "Copied ✅" : "Not Copied ❌";
  };

  return { value, handleCopy };
};

export default useCopyToClipboard;
