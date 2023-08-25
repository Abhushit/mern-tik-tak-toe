import React, { useState, useEffect } from "react";
import GameList from "../../components/GameList";
import PlayerProps from "../../types/PlayerType";

const HomePage: React.FC<{}> = () => {
  const fetchUrl = import.meta.env.VITE_API_URL;
  const [gameList, setGameList] = useState<PlayerProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    fetchGameList();
  }, []);

  const fetchGameList = () => {
    setLoading(true);
    fetch(`${fetchUrl}/api/tiktaktoe`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setGameList(data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        throw err;
      });
  };

  return <GameList gameList={gameList} loading={loading} />;
};

export default HomePage;
