import {useEffect,useReducer,useRef} from "react";
import { Game } from "../typescriptClasses/Game";

const initialGameState = {...new Game(null)};
export type GameState = typeof initialGameState;
export type GameStateAction = {type:string,payload:GameState}
export function useCanvas(draw:(game:GameState)=>void){
  const [game,setGame] = useReducer(
    (currentState:GameState,action:GameStateAction)=>{
      let copyState = {...currentState};
      switch(action.type){
        case "setGame()":{
          return {...copyState,...action.payload}
        }
        default:{
          return currentState;
        }
      }
    },initialGameState);
  const canvasRef = useRef<HTMLCanvasElement|null>(null);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if(canvasEl === null)throw new Error("canvas Element is null Line07 in Canvas.tsx");
        canvasEl;
        const Ctx = canvasEl.getContext("2d");
        if(Ctx === null) throw new Error("Ctx variable is null Line10 in Canvas.tsx");
        setGame({})
        let animationId:number;
        const renderer = () => {
          animationId = window.requestAnimationFrame(renderer);
          draw(game);
        }
        renderer();
        return () => {
          window.cancelAnimationFrame(animationId);
        };
    },[draw]);
  return {canvasRef,game,setGame};
}