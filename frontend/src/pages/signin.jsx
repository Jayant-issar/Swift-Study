import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export function Signin(){
  const [userName, setUserName] = useState(" ")
  const [password, setPassword] = useState(" ")
  const navigate = useNavigate();

    return (
        <div className='h-screen bg-[#FCF5ED] flex justify-center items-center '>
          <div id="loginContainer" className="w-3/5 h-2/3 flex rounded-xl border-black border-2 "> 
            <div id="signinHero" className="bg-[url()] border-black border-2  w-1/3 h-full bg-cover bg-no-repeat rounded-tl-xl
            rounded-bl-xl p-4" >
          
            </div>
            <div id="loginside" className="w-4/6 border-black border-2 h-full rounded-tr-xl rounded-br-xl bg-[url('src/assets/biege-solid-background.jpg')] bg-cover">
              <div id="projectname" className="h-1/4 flex justify-center items-center text-5xl
              font-medium font-serif text-[#001524]">Swift Wallet</div>
              <div id="loginDetails" className="h-3/5">
                    <div className=" flex justify-center h-1/4 items-center text-4xl font-serif font-medium text-[#1F1717]" >
                        Sign In
                    </div>
                    <div className="flex flex-col justify-center h-1/2 items-center">
                        <input type="text" placeholder="Username or Email" onChange={(e)=>{setUserName(e.target.value)}}
                        className="bg-transparent placeholder:text-[#001524] border-2 border-[#445D48]  h-12 w-80 p-2 rounded-3xl focus:border-[#445D48]" />
                        <br />
                        <input type="text" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}
                        className="bg-transparent placeholder:text-[#001524] border-2 border-[#445D48] h-12 w-80 p-2 rounded-3xl" />
                    </div>
                    <div className=" h-20 flex justify-center items-center">
                        <button className="bg-[#445D48] h-12 w-56 p-2 rounded-3xl font-serif text-[#D6CC99]"
                        onClick={async()=>{
                          const response = axios.post("http://localhost:3000/api/v1/user/signin",{
                            userName,
                            password
                          });
                          localStorage.setItem(`token`,response)
                          navigate("/dashboard")
                  
                        }} >
                        Sign In</button>
                    </div>
                
              </div>
            </div>
          </div>
         </div>

  )
}