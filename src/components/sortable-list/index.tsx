import { useState } from "react"
import { toast } from "react-toastify"
import Card from "./components/Card"
import { Search } from "./components/Search"
import { DATA } from "./data"

type TSkill = {
  skill: string,
  id: number
}

const SortableList = () => {
  const [data, setData] =useState<TSkill[]>([...DATA]) 
  const [addedSkills, setAddedSkills] = useState<TSkill[]>([])

  const handleAddSkill = (skill: TSkill) => {
    if (addedSkills.length > 4) {
      toast.warn("Maximum skills exceeded")
      return;
    }
    setAddedSkills(p => [...p, skill])
    setData(data.filter(item => !item.skill.includes(skill.skill)))
  }
  const handleDelete = (id: number) => {
    const dataToUpdate = addedSkills.find(elem => elem.id === id)
    //@ts-ignore
    setData((p: TSkill[] | undefined) => [dataToUpdate, ...p ] )
    const filteredAddedSkill = addedSkills.filter(item => item.id !== id)
    setAddedSkills(filteredAddedSkill)
  }

  return (
    <div className="bg-purple-100 p-40 text-center">

      <h1 className="text-purple-900 text-2xl leading-loose">Select your top 5 tech skills</h1>
      <div className="bg-white shadow-lg rounded-lg flex justify-between mx-auto p-10 mt-4 gap-x-10">
        <div className="flex-1">
          { addedSkills.length > 0 ? addedSkills.map((skill, index) => (
             <Card title={skill.skill} index={index} id={skill.id} handleDelete={handleDelete} />
          )) : <div className="flex gap-5 text-gray-700 justify-center my-auto items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              <p>No Skills added</p>
        </div>}

       {addedSkills.length > 0 &&   <Search data={data} handleAddSkill={ handleAddSkill} />}
         
        </div>
        <div className="flex-2 basis-[30%]">
          <div className="flex flex-col gap-y-3">
          <h3 className="text-purple-900 text-lg text-start">Suggested Skills</h3>
            {data.slice(0, 8).map(skill => {    
              return (
                <div key={skill.id} className="flex gap-x-3 text-gray-700 text-lg">
                <button onClick={() => handleAddSkill(skill)}>+</button> <p>{ skill.skill}</p>
                </div>
              )
          })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortableList