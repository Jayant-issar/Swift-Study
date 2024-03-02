import React, { useEffect } from 'react';
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Signup(){

    const [userName, setUserName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [firstName, setFirstName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const navigate  = useNavigate()
    return (
        <div className='h-screen bg-[#FCF5ED] flex justify-center items-center '>
          <div id="loginContainer" className="w-3/5 h-2/3 flex rounded-xl "> 
            <div id="signinHero" className="bg-[url('src/assets/download(4).jpg')] w-1/3 h-full bg-cover bg-no-repeat rounded-tl-xl
            rounded-bl-xl p-4" >
          
            </div>
            <div id="loginside" className="w-4/6 h-full rounded-tr-xl rounded-br-xl bg-[url('src/assets/biege-solid-background.jpg')] bg-cover">
              <div id="projectname" className="h-1/4 flex justify-center items-center text-5xl
              font-medium font-serif text-[#1F1717]">Swift Study</div>
              <div id="loginDetails" className="h-3/5">
                    <div className=" flex justify-center h-1/4 items-center text-4xl font-serif font-medium text-[#1F1717]" >
                        Sign Up
                    </div>
                    <div className="flex flex-col justify-center h-1/2 items-center">
                        <input type="text" placeholder="Email" onChange={e=>{setUserName(e.target.value)}}
                        className="bg-transparent placeholder:text-[#1F1717] border-2 border-[#CE5A67] focus:bg-transparent
                         autofill:bg-transparent h-1/5 w-80 p-2 rounded-3xl focus:border-[#CE5A67]" />
                        
                        <input type="text" placeholder="First Name" onChange={e=>{setFirstName(e.target.value)}}
                        className="bg-transparent placeholder:text-[#1F1717] m-1 border-2 border-[#CE5A67] h-1/5 w-80 p-2 rounded-3xl" />

                        <input type="text" placeholder="Last Name" onChange={e=>{setLastName(e.target.value)}}
                        className="bg-transparent placeholder:text-[#1F1717] m-1 border-2 border-[#CE5A67] h-1/5 w-80 p-2 rounded-3xl" />

                        <input type="text" placeholder="Password" onChange={e=>{setPassword(e.target.value)}}
                        className="bg-transparent placeholder:text-[#1F1717] border-2 border-[#CE5A67] h-1/5 w-80 p-2 rounded-3xl" />
                        
                    </div>
                    <div className=" h-20 flex justify-center items-center">
                        <button className="bg-[#CE5A67] h-12 w-56 p-2 rounded-3xl font-serif text-[#1F1717]" onClick={async ()=>{
                            //sending info back to the backend
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                userName,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem(`token`,response.data.token)
                            console.log(response.data)
                            console.log(response.data.token);
                            navigate("/dashboard")
                        }}>
                        Sign Up</button>
                    </div>
              </div>
            </div>
          </div>
         </div>
      )
}