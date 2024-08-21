import {Player} from "./Player.ts"
export class Game {
    ctx
    player:Player = new Player;
    constructor(Ref:React.MutableRefObject<HTMLCanvasElement|null>){
        let context = Ref.current?.getContext("2d");
        if (context === null)return;
        this.ctx = context;
    }
}
export function newGame(){
    let Game = new Game();
    return Game;
}