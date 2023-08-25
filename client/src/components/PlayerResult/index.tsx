import React from 'react';
import PlayerProps from "../../types/PlayerType";
import './index.css';

const PlayerResult:React.FC<{playerDetails:PlayerProps}> = ({playerDetails}) => {
  return (
    <div className="player_details">
      <b>{playerDetails.name}</b>
      <p>Wins: {playerDetails.wins}</p>
      <p>Loose: {playerDetails.lose}</p>
      <p>Tied: {playerDetails.ties}</p>
    </div>
  );
};

export default PlayerResult;
