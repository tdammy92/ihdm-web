import React from "react";

import sig from "../../../../src/Assets/DirectorSign.png";


import './FooterPage.css'
function Signature() {



  return (
    <div 
    className="director__signature" 

    >

      <img   src={sig}    alt="Directors signature" />

      <p>Tarhule Joshua Teryila</p>

      <p>
        <strong>Director</strong>
      </p>
    </div>
  );
}

export default Signature;
