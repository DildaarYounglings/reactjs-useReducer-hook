import React,{useEffect,useRef} from "react";

export function useCanvas(draw:(ctx:CanvasRenderingContext2D,count:any)=>void){
    const Ref = useRef<HTMLCanvasElement|null>(null);

    useEffect(() => {
        const canvasEl = Ref.current;
        if(canvasEl === null)throw new Error("canvas Element is null Line07 in Canvas.tsx");
        const Ctx = canvasEl?.getContext("2d");
        if(Ctx === null) throw new Error("Ctx variable is null Line10 in Canvas.tsx");
        let count = 0;
        let animationId:number;
        const renderer = () => {
          count++;
          draw(Ctx,count);
          animationId = window.requestAnimationFrame(renderer);
        }
        renderer();
        return () => {
          window.cancelAnimationFrame(animationId);
        };
    },[draw]);
    return Ref;
}