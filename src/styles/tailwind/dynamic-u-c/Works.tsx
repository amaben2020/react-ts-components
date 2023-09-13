import { useState } from "react";

export const Works = () => {
  const colors = ["bg-red-500", "bg-green-500", "bg-yellow-500"];
  const [color, setColor] = useState(colors[0]);
  const changeColor = () => {
    setColor("bg-green-500");
  };
  return (
    <>
      <div className={`w-40 h-40 border ${color}`}></div>
      <select
        value={color}
        className={`${color}`}
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
