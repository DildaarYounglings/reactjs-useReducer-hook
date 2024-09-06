import './App.css';
import { Canvas } from './components/Canvas';
import {useCanvas } from './hooks/useCanvas';
import { Game, gameBuilder } from './typescriptClasses/Game';
import { Player } from './typescriptClasses/Player';

function App() {
  const draw = (game:Game) => {
    game.draw();
  }
  const {canvasRef,game,setGame} = useCanvas(draw);
  game;setGame;
  const setPlayer = (player:Player) => {
    setGame(gameBuilder.setPlayer(player).build());
  }

  return (
    <>
      <h1>Score</h1>
      <Canvas canvasRef={canvasRef}></Canvas>
    </>
  )
}
export default App;