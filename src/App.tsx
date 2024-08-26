import './App.css';
import { Canvas } from './components/Canvas';
import { GameState, useCanvas } from './hooks/useCanvas';

function App() {
  const draw = (game:GameState) => {
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