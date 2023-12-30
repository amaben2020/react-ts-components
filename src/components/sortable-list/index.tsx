import { useState } from "react"
import Card from "./components/Card"
import { DATA } from "./data"

const INITIAL_STATE = {
  addedSkills: [],
  suggested: []
}

const SortableList = () => {

    // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD": {
  //       return {
  //         ...state,
  //         addedSkills: state.
  //       }
  //     }
  //   }
  // }

  // const [state, reducer] = useReducer(() => {}, INITIAL_STATE)
  const data = [...DATA]
  const [addedSkills, setAddedSkills] = useState([])
  
  const handleAddSkill = (skill: any) => {
    setAddedSkills(p => [...p,skill])
}

  return (
    <div className="bg-purple-100 p-40 text-center">

      <h1 className="text-purple-900 text-2xl leading-loose">Select your top 5 tech skills</h1>
      <div className="bg-white shadow-lg rounded-lg flex justify-between mx-auto p-10 mt-4 gap-x-10">
        <div className="flex-1">
          { addedSkills.length > 0 ? addedSkills.map((skill, index) => (
             <Card title={skill.skill} index={index} />
          )) : <p>No Skills added</p>}
         
        </div>
        <div className="border-2 flex-2 basis-[30%]">
          <h3 className="text-purple-900 text-lg">Suggested Skills</h3>

          <div className="flex flex-col gap-y-3">
            {data.slice(0, 8).map(skill => {    
              return (
                <div key={skill.id} className="flex gap-x-3">
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