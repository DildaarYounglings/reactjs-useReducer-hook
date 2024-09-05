import './App.css';
import { Canvas } from './components/Canvas';
import {useCanvas } from './hooks/useCanvas';
import { Game } from './typescriptClasses/Game';

function App() {
  const draw = (game:Game) => {
    game;
  }
  const {canvasRef,game,setGame} = useCanvas(draw);
  game;setGame;

  return (
    <>
      <h1>Score</h1>
      <Canvas canvasRef={canvasRef}></Canvas>
    </>
  )
}
export default App;