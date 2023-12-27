
// interface TInputProps extends ComponentProps<"input">  {
//   label: string

import { InputHTMLAttributes } from "react"

// }
interface TInputProps extends InputHTMLAttributes<HTMLInputElement>  {
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