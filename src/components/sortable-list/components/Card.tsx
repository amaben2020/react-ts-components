import Draggable from "react-draggable"



const Card = ({ title, index }: { title: string, index: number }) => {
  return (
    <Draggable >
        <div className='bg-blue-900 p-6 rounded-lg text-white text-xl w-full flex gap-3 hover:bg-blue-800 cursor-pointer transition-all duration-300 my-5'><p>
    {index+1}.</p>  <p>{title}</p></div>
    </Draggable>
  
  )
}

export default Card