import { useState } from "react";

export const DoesntWork = () => {
  const colors = ["red", "green", "yellow"];
  const [color, setColor] = useState(colors[0]);
  const changeColor = () => {
    setColor("green");
  };
  return (
    <>
      <div className={`w-40 h-40 border bg-${color}-500`}></div>
      <select
        value={color}
        className={`bg-${color}-500`}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="">choose</option>
        {colors.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button onClick={changeColor}>Change color</button>
    </>
  );
};
