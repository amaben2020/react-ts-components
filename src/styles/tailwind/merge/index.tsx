import { twMerge } from "tailwind-merge";

export const SpecialButton: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <button
      className={twMerge("px-2 py-1 bg-red-500 hover:bg-red-800", className)}
    >
      Click me!
    </button>
  );
};

// Then we can override the style like so:

// some-other-component.js

// const Component = () => {
//   <div>
//     <h1>Hello!</h1>
//     <SpecialButton className="bg-blue-500 hover:bg-blue-800" />
//   </div>
// }
