
const Modal = ({ isOpen, handleClose }: {isOpen: boolean, handleClose: ( ) => void }) => {
  if (!isOpen) return null
  return (
    <>
      <div className="top-0 fixed z-50 bottom-0 right-0 left-0 bg-[#00000099]"/> 
        <div className="fixed top-[30%] left-[35%] z-50">
        <div className="relative rounded-lg p-20 max-w-[50%] bg-[#fefefe]">
          <button className="absolute right-5 top-2 p-5" onClick={handleClose}>Ⅹ</button>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, obcaecati ipsam. Iste architecto voluptatem odit sunt quia perspiciatis consequatur? Cupiditate eveniet quos ipsam neque, quod numquam. Illo perferendis praesentium veritatis.
            </p> 
          </div>
        </div>
    </>
  )
}

export default Modal

// https://github.com/WebDevSimplified/React-Simplified-Advanced-Projects/blob/main/04-05-modal/before/styles.css