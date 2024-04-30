import React from "react";
import sig from "../../../../src/Assets/sig.png";

function Signature() {
  return (
    <div className="career__items">
      <img src={sig} height={70} width={90} alt="Directors signature" />

      <p>Tarhule Joshua Teryila</p>

      <p>
        <strong>Director</strong>
      </p>
    </div>
  );
}

export default Signature;
