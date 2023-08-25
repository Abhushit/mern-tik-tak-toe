import React, { useState, useEffect } from "react";
import BoxButton from "../BoxButton";
import "./index.css";
import CalculateWinner from "../../hooks/calculateWinner";
import { useNavigate } from "react-router-dom";
import PlayerProps from "../../types/PlayerType";
import PlayerResult from "../PlayerResult";
import ConfettiExplosion from "react-confetti-explosion";

// Constants
const PLAYER_X = "X";
const PLAYER_O = "O";

const Gameboard: React.FC<{}> = () => {
  const fetchUrl = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [turn, setTurn] = useState<boolean>(false);
  const [player1Details, setPlayer1Details] = useState<PlayerProps>({
    name: "",
    wins: 0,
    lose: 0,
    ties: 0,
  });

  const [player2Details, setPlayer2Details] = useState<PlayerProps>({
    name: "",
    wins: 0,
    lose: 0,
    ties: 0,
  });

  var [datas, setDatas] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [winner, setWinner] = useState<string | null>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [saved, setSaved] = useState<boolean>(false);
  const [showFlare, setShowFlare] = useState<boolean>(false);

  useEffect(() => {
    if (winner) {
      setDisabled(true);
      updatePlayerDetails(winner);
    }
  }, [winner]);

  const updatePlayerDetails = (winner: string) => {
    const player1Update = { ...player1Details };
    const player2Update = { ...player2Details };

    if (winner === PLAYER_X) {
      player1Update.wins++;
      player2Update.lose++;
      setShowFlare(true);
      setTimeout(() => {
        setShowFlare(false);
      }, 3000);
    } else if (winner === PLAYER_O) {
      player2Update.wins++;
      player1Update.lose++;
      setShowFlare(true);
      setTimeout(() => {
        setShowFlare(false);
      }, 3000);
    } else if (winner === "tie") {
      player1Update.ties++;
      player2Update.ties++;
    }

    setPlayer1Details(player1Update);
    setPlayer2Details(player2Update);
  };

  //When click on the game board
  const handleBoxClick = (index: number) => {
    datas[index] = !turn ? "X" : "0";

    setDatas(datas);

    setTurn(!turn);

    var res = CalculateWinner(datas);
    if (res !== null) {
      setWinner(res);
    }
  };

  //when clicked on start button
  const handleStart = () => {
    setDatas(["", "", "", "", "", "", "", "", ""]);
    if (player1Details.name === "") {
      setPlayer1Details({
        ...player1Details,
        name: "Player1",
      });
    }
    if (player2Details.name === "") {
      setPlayer2Details({
        ...player2Details,
        name: "Player2",
      });
    }

    //reset
    setDisabled(false);
    setWinner("");
    setTurn(false);
  };

  const handleContinue = () => {
    handleStart();
  };

  const handleStop = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        player1: player1Details,
        player2: player2Details,
      }),
    };
    fetch(`${fetchUrl}/api/tiktaktoe`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setSaved(true);
          setTimeout(() => {
            navigate(-1);
          }, 1500);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <div className="center mt-2 mb-1 relative">
        <h1>Let's play the game!</h1>
      </div>
      <div className="back_button">
        <button
          className="click_btn"
          onClick={handleBack}
          style={{ left: "0", top: "0px" }}
        >
          Back
        </button>
      </div>
      {/* Enter the name section */}
      <section className="player_name_section">
        <div>
          <label htmlFor="player1">Player1 Name: </label> <br />
          <input
            type="text"
            id="player1"
            name="name"
            value={player1Details.name}
            placeholder="Enter your name..."
            onChange={(e) =>
              setPlayer1Details({ ...player1Details, name: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="player2">Player2 Name: </label>
          <br />
          <input
            type="text"
            id="player2"
            name="name"
            value={player2Details.name}
            placeholder="Enter your name..."
            onChange={(e) =>
              setPlayer2Details({ ...player2Details, name: e.target.value })
            }
          />
        </div>

        <div className="start_button">
          <button className="click_btn" onClick={handleStart}>
            Start
          </button>
        </div>
      </section>
      {/* Enter the name section */}

      <section className="mt-2">
        {!disabled ? (
          <h3>
            <u>{player1Details.name}</u>: {PLAYER_X} and{" "}
            <u>{player2Details.name}</u>: {PLAYER_O}
          </h3>
        ) : (
          <p>
            Please Click on start after you enter your name. Then proceed to
            play!
          </p>
        )}
      </section>

      <section className="game_section">
        {/* Game board */}
        <div className="game_board_whole">
          <div className="game_board">
            {datas.map((data, index) => (
              <BoxButton
                key={index}
                value={data}
                handleBoxClick={() => handleBoxClick(index)}
                disabled={disabled}
              />
            ))}
          </div>

          {/* Winning Celebration */}
          {showFlare && <ConfettiExplosion duration={3000} />}

          <div className="center">
            {winner && (
              <p>
                {winner === PLAYER_X
                  ? `${player1Details.name} wins!`
                  : winner === "tie"
                  ? "It is a tie!"
                  : `${player2Details.name} wins!`}
              </p>
            )}

            <div className="flex_buttons mt-2">
              <button className="stop_btn click_btn" onClick={handleStop}>
                Stop
              </button>
              <button className="click_btn" onClick={handleContinue}>
                Continue
              </button>
            </div>
            {saved && (
              <div className="center saved_data">
                <p>Game data saved successfully</p>
              </div>
            )}
          </div>
        </div>
        {/* Game board */}

        {/* Player Result */}
        <div className="game_details">
          <PlayerResult playerDetails={player1Details} />
          <PlayerResult playerDetails={player2Details} />
        </div>
        {/* Player Result */}
      </section>
    </section>
  );
};

export default Gameboard;
