import './App.css';
import { Canvas } from './components/Canvas';
import { useCanvas } from './hooks/useCanvas';

function App() {
  const draw = (ctx:CanvasRenderingContext2D,count:any) => {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.fillStyle = 'grey';
    const delta = count % 700;
    ctx.fillRect(10+delta,10,100,100);
  }
  const canvasEl = useCanvas(draw);

  return (
    <Canvas canvasEl={canvasEl}></Canvas>
  )
}
export default App;