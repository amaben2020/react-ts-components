import { ComponentProps } from "react";

interface TInputProps extends ComponentProps<"input">  {
  label: string
}

const InputComponent = ({label, ...rest}: TInputProps) => {
  return (
    <>
       <label htmlFor="">{label}:
      </label>  
      <input {...rest} /> 
    </>
  )
}

export default InputComponent