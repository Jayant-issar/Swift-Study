import React from "react";


export function Fullpdf({onClose,link}) {
  return (
    <div className="h-screen fixed flex justify-center inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
      <h1 className="items-center">PDF Viewer</h1>
      <div
        onClick={onClose}
        className="flex w-56 justify-center  rounded-md bg-pink-500 py-1.5 font-medium text-blue-50 hover:bg-pink-600"
      >
        Close
      </div>
      <iframe
        title="PDF Viewer"
        className="h-screen w-full mx-auto mt-4"
        src={link}
      ></iframe>
    </div>
  );
}

