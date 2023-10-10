import { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import './styles.css'

const CustomModal = ({ isOpen, handleClose, children }: { isOpen: boolean, handleClose: () => void,children: ReactNode }) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (dialogRef.current == null) return
    if (isOpen) {
      // show
      dialogRef.current.showModal()
    } else {
      //hide
      dialogRef.current.close()
    }
  }, [isOpen]) 

  // escape with esc to close Modal
  useEffect(() => {
    if (dialogRef.current == null) return
    document.addEventListener("close", 
            handleClose
    )

    return () => {
      document.removeEventListener("close",
           handleClose
      )
    }
  } , [handleClose])
  return (
   createPortal( <dialog ref={dialogRef}>
      <div className='relative p-20 rounded-lg max-w-[400px]'>
        <button className='top-4 right-5 absolute' onClick={handleClose}>Close</button>
            {children}   
           </div>
  
    </dialog>, document.getElementById("portal"))
  )
}

export default CustomModal