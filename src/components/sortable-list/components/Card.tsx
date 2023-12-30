import Draggable from "react-draggable"

const Card = ({ title, index, id, handleDelete }: { title: string, index: number, handleDelete: (id: number) => void, id: number }) => {
  return (
    <Draggable >
  <div className='bg-blue-900 p-6 rounded-lg text-white text-xl w-full flex gap-3 hover:bg-blue-800 cursor-pointer transition-all duration-300 my-5 items-center'><p>
        {index + 1}.</p>  <p>{title}</p>
        <button onClick={() => handleDelete(id)} className="ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    </button>
  </div>
    </Draggable>
  )
}

export default Card