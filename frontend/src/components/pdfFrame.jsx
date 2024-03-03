import React from "react";
import { Link } from "react-router-dom";

function Pdfframe({Link}) {
  return (
    <div>
      <h1>PDF Viewer</h1>
      <iframe
        title="PDF Viewer"
        className="h-56"
        src={Link}
      ></iframe>
      <hr className="my-4" />
      
    </div>
  );
}

export default Pdfframe