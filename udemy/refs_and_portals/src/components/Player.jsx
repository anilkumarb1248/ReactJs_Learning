import { useRef, useState } from "react";

export default function Player() {
  const playerNameRef = useRef();

  const [playerName, setPalyerName] = useState();

  const handleBtnClick = () => {
    setPalyerName(playerNameRef.current.value);
    playerNameRef.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"} </h2>
      {/* <h2>Welcome {playerName ?? "unknown entity"} </h2> */}
      <p>
        <input type="text" ref={playerNameRef} />
        <button onClick={handleBtnClick}>Set Name</button>
      </p>
    </section>
  );
}
