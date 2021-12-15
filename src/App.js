import React, { useState } from "react";

import Game from "./Components/Game";
import TapToPlay from "./Components/TapToPlay";

function App() {
  const [play, setPlay] = useState(true);

  const onClickHandler = () => {
    setPlay(!play);
  };
  return (
    <>
      {play && <TapToPlay onClickHandler={onClickHandler} />}
      <Game />
    </>
  );
}

export default App;
