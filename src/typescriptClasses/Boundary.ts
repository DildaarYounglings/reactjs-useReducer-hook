export class Boundary {
    posX:number = 0;
    posY:number = 0;
    width: number = 0;
    height: number = 0;
    constructor(bounderyBuilder:BoundaryBuilder) {
        this.height = bounderyBuilder.height;
        this.width = bounderyBuilder.width;
        this.posX = bounderyBuilder.posX;
        this.posY = bounderyBuilder.posY;
    }
    draw(ctx:CanvasRenderingContext2D){
        ctx.fillRect(this.posX,this.posY,this.height,this.width);
    }
    clone(){
        return boundaryBuilder.setPosition(this.posX,this.posY).setSize(this.width,this.height).build();
    }
}

export class BoundaryBuilder {
    static Width:number = 40;
    static Height:number = 40;
    width: number = 0;
    height: number = 0;
    posY:number = 0;
    posX:number = 0;

    public setSize(width:number,height:number):BoundaryBuilder{
        this.width = width;this.height=height;
        return this;
    }
    public setPosition(positionX:number,positionY:number): BoundaryBuilder {
        this.posX = positionX;
        this.posY = positionY;
        return this;
    }
    public build(): Boundary {
        return new Boundary(this);
    }
}
export const boundaryBuilder = new BoundaryBuilder();