export class Player {
    posX:number=0;posY:number=0;
    velocity_X:number=0;velocity_Y:number=0;
    width:number=0;height:number=0;
    constructor(player:PlayerBuilder){
        this.posX= player.posX;
        this.posY = player.posY;
        this.width = player.width;
        this.height = player.height;
    }
    draw(ctx:CanvasRenderingContext2D) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}
export class PlayerBuilder{
    posX:number=0;posY:number=0;
    velocity_X:number=0;velocity_Y:number=0;
    width:number=0;height:number=0;
    build(){
        return new Player(this);
    }
    setPosition(x:number,y:number){
        this.posX = x; this.posY = y;
        return this;
    }
    setVelocity(x:number, y:number){
        this.velocity_X = x;
        this.velocity_Y = y;
        return this;
    }
}
export const playerBuilder = new PlayerBuilder();