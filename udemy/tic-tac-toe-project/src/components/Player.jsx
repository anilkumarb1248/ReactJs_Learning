import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditBtnClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerNameSpan = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    playerNameSpan = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditBtnClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
