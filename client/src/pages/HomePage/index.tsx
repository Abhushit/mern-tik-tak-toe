import React, {useState, useEffect} from 'react'
import GameList from '../../components/GameList'
import PlayerProps from '../../types/PlayerType';

const HomePage = () => {
  const fetchUrl = import.meta.env.VITE_API_URL;
  const [gameList, setGameList] = useState<PlayerProps[]>([]);
  
  
  useEffect(() => {
    fetchGameList()
  },[])

  const fetchGameList = () => {

    fetch(`${fetchUrl}/api/tiktaktoe`)
    .then((response) => response.json())
    .then((data) => {
      if(data.status === 200){
        setGameList(data.data);
      }
    })
  }

  return (
    <GameList gameList={gameList} />
  )
}

export default HomePage