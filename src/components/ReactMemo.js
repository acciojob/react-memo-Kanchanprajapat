import React, { useState } from 'react'

const ReactMemo = () => {
    const[skills,setSkills]=useState([])
    const[skillInput, setSkillInput] = useState("")
    return (
        <div>
            <h1>React.memo</h1>
            <input id="skill-input"  type='text' onChange={(e)=>setSkillInput(e.target.value)} value = {skillInput}/> 
            <button id="skill-btn" onClick={()=>setSkills([...skills,skillInput])}>Add Skill</button>
            <ul id="item-jumbotron">
                {
                    skills.map((skill, index)=> <li key={index}>{skill}</li>)
                }
            </ul>
        </div>
    )
}

export default ReactMemo