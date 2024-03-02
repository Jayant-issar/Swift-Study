import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const AddSubjectCard = ({onClose}) => {
  const [subjectArr, setSubjectArr] = useState([]);
  const [subjectName , setSubjectName] = useState("");
  const [isRequestSent, setIsRequestSent] = useState(false); // Flag to track if the request has been sent
  
  const location = useLocation();
  const paramName = new URLSearchParams(location.search);
  const userEmail = paramName.get('email');

  const config = {
    headers: {
      'email': userEmail
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:2323/user/getSubs', config);
      console.log(response.data);
      setSubjectArr(response.data);
    }

    fetchData();
  }, []);

  const handleConfirm = async () => {
    if (!isRequestSent) { // Check if the request has already been sent
      let arr = subjectArr;
      arr.push(subjectName);
      setSubjectArr(arr);
      await axios.put("http://localhost:2323/user/update", {"subjects": arr}, config);
      setIsRequestSent(true); // Set the flag to true after sending the request
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  p-20">
      <div className="max-w-md mx-auto bg-[#FCF5ED] rounded-xloverflow-hidden shadow-md rounded-lg p-6 text-[#1F1717]">
        <h1 className="text-3xl font-semibold mb-4">Add Subject</h1>
        <input
          onChange={(e)=>{setSubjectName(e.target.value)}}
          className="w-full p-3 bg-[#FCF5ED] border-2 border-gray-300 rounded-md mb-4 focus:outline-none"
          type="text"
          placeholder="Enter subject name"
        />
        <button className="w-full bg-[#CE5A67] text-[#1F1717] p-3 text-lg rounded-md hover:bg-[#F4BF96] transition duration-300"
          onClick={handleConfirm}>
          Confirm
        </button>
        <button onClick={onClose} className="w-full mt-4 bg-[#CE5A67] text-[#1F1717] p-3 text-lg rounded-md hover:bg-[#F4BF96] transition duration-300">Close</button>
      </div>
    </div>
  );
};
