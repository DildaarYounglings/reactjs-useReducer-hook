import { useReducer } from 'react';
import './App.css';
import { Canvas } from './components/Canvas';
import { useCanvas } from './hooks/useCanvas';

const initialState = {score:0}
type Action = {type:"setScore()",payload:typeof initialState};
function App() {
  const [state,dispatch] = useReducer(
    (currentState:typeof initialState,action:Action)=>{
      let copyState = {...currentState};
      switch(action.type){
        case "setScore()":{
          copyState.score = action.payload.score
          return copyState
        }
        default:{
          return currentState
        }
      }
    },initialState,
  );
  const draw = (ctx:CanvasRenderingContext2D,count:any) => {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.fillStyle = 'grey';
    const delta = count % 700;
    ctx.fillRect(10+delta,10,100,100);
  }
  const canvasEl = useCanvas(draw);

  return (
    <>
      <h1>{state.score}</h1>
      <Canvas canvasEl={canvasEl}></Canvas>
    </>
  )
}
export default App;