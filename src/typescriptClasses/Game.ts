import { Level } from "./Level.ts";
import {Player, PlayerBuilder} from "./Player.ts"
export class Game {
    ctx:CanvasRenderingContext2D
    player:Player = new PlayerBuilder().build();
    levels:Level[] = []
    constructor(game:GameBuilder)
    {
        if(game.ctx === null) throw new Error("ctx cannot be null");
        this.ctx = game.ctx;this.levels = game.levels;this.player = game.player;
    }
    clone():Game{
        return new GameBuilder().setCtx(this.ctx).setLevels(this.levels).setPlayer(this.player).build();
    }
}
export class GameBuilder {
    ctx:CanvasRenderingContext2D|null = null;player:Player = new PlayerBuilder().build();
    levels:Level[] = [];
    
    setCtx(ctx:CanvasRenderingContext2D):GameBuilder{
        if(ctx === null)throw Error("ctx is null")
        this.ctx = ctx;
        return this;
    }
    public setPlayer(player:Player): GameBuilder {
        this.player = player;
        return this;
    }
    public setLevels(levels:Level[]): GameBuilder {
        this.levels = levels;
        return this;
    }
    
    public build(): Game {
        return new Game(this);
    }
}
