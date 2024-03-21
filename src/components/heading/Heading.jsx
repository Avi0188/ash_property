import React from "react";
import "../../pages/home/home.css";

function Heading({ head, para }) {
  return (
    <>
      <h1>{head}</h1>
     
      <div style={{marginTop:"15px"}}>
        <p>{para}</p>
      </div>
    </>
  );
}

export default Heading;
