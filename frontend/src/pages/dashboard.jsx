import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/navBar'
import { SubjectCard } from '../components/subjectCard'
import { AddSubjectCard } from '../components/addSubject'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { set } from 'mongoose'

export function Dashboard() {
  const [popUP, setPopUp] = useState(false);
  const location = useLocation();
  const paramName = new URLSearchParams(location.search);
  const userEmail = paramName.get('email')
  const userFirstName = paramName.get('name')
  const [subjectArr, setSubjectArr] = useState([])
  const config = {
    headers: {
      'email': userEmail
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:2321/user/getSubs', config)
      console.log(response.data);
      setSubjectArr(response.data)
    }

    fetchData();
  }, [])

  return (
    <div className=' min-h-screen bg-[#FCF5ED]'>
      <div id='navBar' >
        <NavBar firstname={userFirstName} />
      </div>
      <div id="subjectsandbutton" className='mt-4 p-2 flex'>
        <div id="subjectlist" className=' border-[#1F1717] border-2 rounded-3xl w-4/5 p-4'>
        <div id="allsubjects">
          {
            subjectArr.map((subject) => (
              <SubjectCard key={subject} subjectName={subject} buttonName={"Delete Subject"} firstName={userFirstName} />
            ))
          }
        </div>
        </div>
        <div id="buttons" className=' w-1/5 flex justify-center'>
          <button className=' bg-[#CE5A67] text-[#1F1717] w-48 h-16 mt-8 text-xl rounded-full'
            onClick={() => setPopUp(true)}>
            Add Subjects
          </button>
          {popUP && <AddSubjectCard onClose={() => {
            setPopUp(false)
          }} />}
        </div>

      </div>

    </div>
  )
}
