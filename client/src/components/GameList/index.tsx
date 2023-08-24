import "./index.css";
import { useNavigate } from "react-router-dom";

const GameList = ({gameList}: any) => {
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
          {gameList.length && gameList.map((game:any,index:number) => (
            <tr>
            <td>{index+1}</td>
            <td>{`${game.player1.name} (Win: ${game.player1.wins} - Lose: ${game.player1.lose} - Tied: ${game.player1.ties})`}</td>
            <td>{`${game.player2.name} (Win: ${game.player2.wins} - Lose: ${game.player2.lose} - Tied: ${game.player2.ties})`}</td>
            <td>{game.player1.wins + game.player1.lose + game.player1.ties}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
