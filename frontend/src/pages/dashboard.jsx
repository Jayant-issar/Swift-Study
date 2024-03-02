import React,{useState} from 'react'
import { NavBar } from '../components/navBar'
import { SubjectCard } from '../components/subjectCard'
import { AddSubjectCard } from '../components/addSubject'
import { useLocation } from 'react-router-dom'

export function Dashboard() {
  const [popUP , setPopUp] = useState(false);
  const location = useLocation();
  const paramName = new URLSearchParams(location.search);
  const userEmail = paramName.get('email')
  const userFirstName = paramName.get('name')

  return (
    <div className=' min-h-screen bg-[#FCF5ED]'>
        <div id='navBar' >
            <NavBar firstname={userFirstName}/>
        </div>
        <div id="subjectsandbutton" className=' h-96 mt-4 p-2 flex'>
          <div id="subjectlist" className=' border-[#1F1717] border-2 rounded-3xl w-4/5 p-4'>
            <div id="allsubjects">
              <SubjectCard subjectName={"Digital Electronics"}/>
              <SubjectCard subjectName={"Python Programming"}/>
              <SubjectCard subjectName={"Basic Instrumentation"}/>
              <SubjectCard subjectName={"Circuit Theory And Network Analysis "}/>
            </div>
        </div>
        <div id="buttons" className=' w-1/5 flex justify-center'>
              <button className=' bg-[#CE5A67] text-[#1F1717] w-48 h-16 mt-8 text-xl rounded-full'
              onClick={()=>setPopUp(true)}>
                Add Subjects
              </button>
              {popUP && < AddSubjectCard onClose={()=>{
              setPopUp(false)
            }}/>}
            </div>
        
        </div>
      
    </div>
  )
}

