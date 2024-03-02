import React from 'react';

export const AddSubjectCard = ({onClose}) => {

  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm  p-20">
        <div className="max-w-md mx-auto bg-[#FCF5ED] rounded-xloverflow-hidden shadow-md rounded-lg p-6 text-[#1F1717]">
      <h1 className="text-3xl font-semibold mb-4">Add Subject</h1>
      <input
        className="w-full p-3 bg-[#FCF5ED] border-2 border-gray-300 rounded-md mb-4 focus:outline-none"
        type="text"
        placeholder="Enter subject name"
      />
      <button className="w-full bg-[#CE5A67] text-[#1F1717] p-3 text-lg rounded-md hover:bg-[#F4BF96] transition duration-300"
      onClick={()=>{

      }}>
        Confirm
      </button>
    <button onClick={onClose} className="w-full mt-4 bg-[#CE5A67] text-[#1F1717] p-3 text-lg rounded-md hover:bg-[#F4BF96] transition duration-300">Close
    </button>
    </div>
    </div>
    
  );
};


