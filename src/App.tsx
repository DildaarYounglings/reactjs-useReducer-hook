import { useReducer } from 'react';
import './App.css';
import { Canvas } from './components/Canvas';
import { useCanvas } from './hooks/useCanvas';
import { Game } from './typescriptClasses/Game';

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
  const draw = (game:Game) => {
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