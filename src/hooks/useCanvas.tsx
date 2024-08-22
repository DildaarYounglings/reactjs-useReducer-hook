import React,{useEffect,useRef} from "react";
import { Game } from "../typescriptClasses/Game";

export function useCanvas(draw:(game:Game)=>void,game:Game){
    const Ref = useRef<HTMLCanvasElement|null>(null);

    useEffect(() => {
        const canvasEl = Ref.current;
        if(canvasEl === null)throw new Error("canvas Element is null Line07 in Canvas.tsx");
        canvasEl;
        const Ctx = canvasEl.getContext("2d");
        if(Ctx === null) throw new Error("Ctx variable is null Line10 in Canvas.tsx");
        const newGame = new Game(Ctx);
        let animationId:number;
        const renderer = () => {
          animationId = window.requestAnimationFrame(renderer);
          draw(newGame);
        }
        renderer();
        return () => {
          window.cancelAnimationFrame(animationId);
        };
    },[draw]);
    return Ref;
}