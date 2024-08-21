import React,{ useEffect } from "react";

type CanvasProps = {canvasEl:React.MutableRefObject<HTMLCanvasElement|null>};
export function Canvas({canvasEl}:CanvasProps){
return (
  <canvas ref={canvasEl} height={window.innerHeight} width={window.innerHeight} style={{border:"1px solid white",maxHeight:"100vh",maxWidth:"100vw",minHeight:"100%",minWidth:"100%",}}></canvas>
)
}