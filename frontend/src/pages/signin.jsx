import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { set } from "mongoose"

export function Signin(){
  const [userName, setUserName] = useState(" ")
  const [password, setPassword] = useState(" ")
  const [firstName, setFirstName] = useState(" ")
  const navigate = useNavigate();

  useEffect(()=>{
    async function fetchData(){
      const response = await axios.get("http://localhost:2321/user/getFirstName",{headers:{"email":userName}})
      console.log(response.data)
      setFirstName(response.data.firstName)
    }
    fetchData()
  },[userName])

    return (
        <div className='h-screen bg-[#FCF5ED] flex justify-center items-center '>
          <div id="loginContainer" className="w-3/5 h-2/3 flex rounded-xl"> 
            <div id="signinHero" className="bg-[url('./signimages/og.gif')]   w-1/3 h-full bg-cover bg-no-repeat rounded-tl-xl
            rounded-bl-xl p-4" >
          
            </div>
            <div id="loginside" className="w-4/6  h-full rounded-tr-xl rounded-br-xl bg-white bg-cover">
              <div id="projectname" className="h-1/4 flex justify-center items-center text-5xl
              font-medium font-serif text-[#001524]">Swift Study</div>
              <div id="loginDetails" className="h-3/5">
                    <div className=" flex justify-center h-1/4 items-center text-4xl font-serif font-medium text-[#1F1717]" >
                        Sign In
                    </div>
                    <div className="flex flex-col justify-center h-1/2 items-center">
                        <input type="text" placeholder="Username or Email" onChange={(e)=>{setUserName(e.target.value)}}
                        className="bg-transparent placeholder:text-[#001524] border-2 border-[#CE5A67]  h-12 w-80 p-2 rounded-3xl focus:border-[#CE5A67]" />
                        <br />
                        <input type="text" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}
                        className="bg-transparent placeholder:text-[#001524] border-2 border-[#CE5A67] h-12 w-80 p-2 rounded-3xl" />
                    </div>
                    <div className=" h-20 flex justify-center items-center">
                        <button className="bg-[#CE5A67] h-12 w-56 p-2 rounded-3xl font-serif text-[#080808] hover:bg-[#F4BF96]"
                        onClick={async (e) => {
                          e.preventDefault();
                          const response = await axios.post("http://localhost:2321/user/signin", {
                            userName,
                            password
                          });
                          localStorage.setItem("token", response.data.token);
                          console.log(response.data);
                          if(response.data.message == "the user has sucessfully logedin"){
                            navigate('/home?email='+userName+'&name='+firstName)
                        }
                        }}
                         >
                        Sign In</button>
                    </div>
                
              </div>
            </div>
          </div>
         </div>

  )
}
