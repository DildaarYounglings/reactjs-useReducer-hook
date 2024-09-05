import { Boundary, BoundaryBuilder } from "./Boundary";
export class Level {
    tileMap = [
        ["-", "-", "-", "-", "-", "-", "-", "-"],
        ["-", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", "-"],
        ["-", " ", " ", " ", " ", " ", " ", "-"],
        ["-", "-", "-", "-", "-", "-", "-", "-"]
    ]
    boundaries: Boundary[] = [];
    pushBoundariesBasedOnMap() {
        this.tileMap.forEach((row, y) => {
            row.forEach((column, x) => {
                switch (column) {
                    case "-": this.boundaries.push(new BoundaryBuilder().setSize(BoundaryBuilder.Width,BoundaryBuilder.Height).setPosition(x*BoundaryBuilder.Width,y*BoundaryBuilder.Height).build());
                        break;
                    default:
                        break;
                }
            })
        })

    }
    Draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = "black";
        this.boundaries.forEach(boundary => boundary.draw(ctx));
    }
}