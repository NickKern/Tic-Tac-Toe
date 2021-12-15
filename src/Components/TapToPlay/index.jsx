import React from "react";

import "./TapToPlay.css";

export default function TapToPlay({ onClickHandler }) {
  return (
    <div className='to-play'>
      <div className='shadow'></div>
      <button onClick={onClickHandler}>Play</button>
    </div>
  );
}
