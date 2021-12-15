import React from "react";

import "./Square.css";

export default function Square({ onClickHandler, value }) {
  return (
    <button onClick={() => onClickHandler()} className='square'>
      {value}
    </button>
  );
}
