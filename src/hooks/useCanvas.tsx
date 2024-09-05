import {useEffect,useReducer,useRef} from "react";
import {Game,GameBuilder} from "../typescriptClasses/Game";
import { Player, PlayerBuilder } from "../typescriptClasses/Player";

export function useCanvas(draw:(game:Game)=>void){
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  const [game,setGame] = useReducer((prev:Game,next:Game)=>{prev;return next.clone();},new GameBuilder().build());
  const setPlayer = (player:Player) => {
    setGame(new GameBuilder().setPlayer(player).build());
  }
    useEffect(() => {
        const canvasEl = canvasRef.current;
        if(canvasEl === null)throw new Error("canvas Element is null Line13 in Canvas.tsx");
        canvasEl;const Ctx = canvasEl.getContext("2d");
        if(Ctx === null) throw new Error("Ctx variable is null Line10 in Canvas.tsx");
        setGame(
          new GameBuilder().setCtx(
            Ctx
          ).build()
        );
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
  return {canvasRef,game,setGame,setPlayer};
}