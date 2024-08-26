import React,{ useEffect } from "react";

type CanvasProps = {canvasRef:React.MutableRefObject<HTMLCanvasElement|null>};
export function Canvas({canvasRef}:CanvasProps){
return (
  <canvas ref={canvasRef} height={window.innerHeight} width={window.innerHeight} style={{border:"1px solid white",maxHeight:"100vh",maxWidth:"100vw",minHeight:"100%",minWidth:"100%",}}></canvas>
)
}