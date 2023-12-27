import { ReactNode, ReactPortal, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"

const usePortal = () => {

  // create a div on the fly
  const wrapper = useMemo(() => document.createElement("div"), [])
  
  // add div tag to document body
  useEffect(() => {
    if (typeof window !== "undefined") {
          document.body.appendChild(wrapper)
    }
    return () => document.body.removeChild(wrapper)
  }, [])


  
// return a function that accepts the jsx element to be attached to portal
  return {
    render: (children: ReactNode | null): ReactPortal | null => {
      return createPortal(children, wrapper)
    } 
  }
  
}

export default usePortal