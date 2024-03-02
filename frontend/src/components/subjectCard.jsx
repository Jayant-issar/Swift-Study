


export function SubjectCard({subjectName}){

    return(
        <div className="p-2 flex justify-between mt-4 border-2 h-16 items-center border-gray-300 rounded-md shadow-md">
    <label className="text-xl">{subjectName}</label>
    <div id="buttons">
        <button className="bg-[#CE5A67] text-[#1F1717] h-10 w-24 text-md rounded-xl">
            Lets Go
        </button>
        <button className="bg-[#CE5A67] text-[#1F1717] ml-3 text-md h-10 w-36 rounded-xl">
            Delete Subject
        </button>
    </div>
</div>

    )
}