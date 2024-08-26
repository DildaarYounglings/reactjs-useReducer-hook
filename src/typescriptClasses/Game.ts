import { Level } from "./Level.ts";
import {Player} from "./Player.ts"
export class Game {
    ctx:CanvasRenderingContext2D|null = null
    player:Player = new Player;
    levels:Level[] = []
    constructor(ctx:CanvasRenderingContext2D|null)
    {
        this.ctx = ctx
    }
}