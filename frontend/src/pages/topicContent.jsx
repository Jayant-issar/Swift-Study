import React, { useEffect, useState } from "react";
import Pdfframe from "../components/pdfFrame";
import { NavBar } from "../components/navBar";
import { useLocation } from "react-router-dom";
import { Fullpdf } from "../components/fullpdf";
import { all } from "axios";

export function Content() {
  const location = useLocation();
  const paramName = new URLSearchParams(location.search);
  const topicName = paramName.get('topicName')
  const userFirstName = paramName.get('name')
  let [viewMode, setViewMode] = useState(false);
  const [allReferences, setReferences] = useState([]);
  const [pdfLink, setpdfLinl] = useState("")
  const [refValue, setrefvalue] = useState('https://www.vssut.ac.in/lecture_notes/lecture1430261805.pdf')

  useEffect(() => {
    // This effect will be triggered whenever the allReferences array changes
    // You can perform any additional logic here if needed
  }, [allReferences]);

  return (
    <>
      <NavBar firstname={userFirstName} />
      <div className="main">
        <div className="mt-6 flex flex-row justify-evenly items-center">
          <button
            className="flex item-center justify-center middle none center mr-3 rounded-lg bg-[#CE5A67] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#CE5A67]/20 transition-all hover:shadow-lg hover:shadow-[#CE5A67]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
            onClick={() => window.history.back()}
          >
            Back
          </button>

          <div className="text-4xl font-bold">{topicName}</div>
        </div>
        <div className="mt-6 flex h-96 justify-evenly">
          <div className="h-100vh max-w-full border-black border-2 mt-6 h-full rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            {allReferences.map((ref, index) => (
              <div key={index}>{ref}</div>
            ))}

            <hr className="my-4" />
            <input
              type="text"
              onChange={(e) => {
                setrefvalue(e.target.value);
              }}
              placeholder="input reference"
              className="h-10 p-2 rounded-lg border-black border-2"
            />
            <button
              onClick={() => {
                setReferences([...allReferences, refValue]);
              }}
              className="flex justify-center items-end mt-6 w-full rounded-md bg-[#CE5A67] py-1.5 font-medium text-blue-50 hover:bg-pink-600"
            >
              Add
            </button>
          </div>
          <div className="mt-6 h-96 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between flex-col">
              <Pdfframe
                className="h-96"
                Link={pdfLink}
              />
              <button
                onClick={() => {
                  setViewMode(true);
                }}
                className="flex h-18 justify-center items-end mt-6 w-full rounded-md bg-[#CE5A67] py-1.5 font-medium text-blue-50 hover:bg-pink-600"
              >
                Check
              </button>

              <div className="mt-20">
                    <input
                    type="text"
                    onChange={(e) => {
                        setpdfLinl(e.target.value);
                    }}
                    placeholder="Give new Link"
                    className="h-10 p-2 rounded-lg border-black border-2"
                    />
                    <button
                    onClick={() => {
                        
                    }}
                    className="flex justify-center items-end mt-6 w-full rounded-md bg-[#CE5A67] py-1.5 font-medium text-blue-50 hover:bg-pink-600"
                    >
                    Change Link
                    </button>
              </div>
            </div>
          </div>
        </div>
        {viewMode && (
          <Fullpdf
            link={pdfLink}
            onClose={() => setViewMode(false)}
          />
        )}
      </div>
    </>
  );
}
