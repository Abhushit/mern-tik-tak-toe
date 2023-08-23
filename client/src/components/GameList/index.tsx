import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const GameList = () => {
  const navigate = useNavigate();

  const handleNewgame = () => {
    navigate("/game");
  };
  return (
    <div className="main">
      <div className="main_header">
        <h1>Tik-Tak-Toe</h1>
        <button className="click_btn" onClick={handleNewgame}>Start New Game</button>
      </div>
      <table className="styled_table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Player 1</th>
            <th>Player 2</th>
            <th>Round Played</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{`Andrew (Win: 2 - Loss: 1 - Tied: 0)`}</td>
            <td>{`harry (Win: 1 - Loss: 2 - Tied: 0)`}</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{`Andrew (Win: 2 - Loss: 1 - Tied: 0)`}</td>
            <td>{`harry (Win: 1 - Loss: 2 - Tied: 0)`}</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{`Andrew (Win: 2 - Loss: 1 - Tied: 0)`}</td>
            <td>{`harry (Win: 1 - Loss: 2 - Tied: 0)`}</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{`Andrew (Win: 2 - Loss: 1 - Tied: 0)`}</td>
            <td>{`harry (Win: 1 - Loss: 2 - Tied: 0)`}</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{`Andrew (Win: 2 - Loss: 1 - Tied: 0)`}</td>
            <td>{`harry (Win: 1 - Loss: 2 - Tied: 0)`}</td>
            <td>3</td>
          </tr>
          <tr>
            <td>1</td>
            <td>{`Andrew (Win: 2 - Loss: 1 - Tied: 0)`}</td>
            <td>{`harry (Win: 1 - Loss: 2 - Tied: 0)`}</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
