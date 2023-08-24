import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import GamePage from '../pages/GamePage';

const Routing = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            {/* HomePage */}
            <Route path="/" element={<HomePage />}></Route>

            {/* New Game */}
            <Route path="/game" element={<GamePage />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing