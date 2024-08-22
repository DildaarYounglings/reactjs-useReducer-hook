import { Level } from "./Level.ts";
import {Player} from "./Player.ts"
export class Game {
    ctx
    player:Player = new Player;
    levels:Level[] = []
    constructor(drawingCtx:CanvasRenderingContext2D|null)
    {
        let context = drawingCtx
        if (context === null)throw new Error("seems that the drawing contex is null Line06 in Game.ts");
        this.ctx = context;
    }
    draw()
    {
        // 
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}