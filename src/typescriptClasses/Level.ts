import { Boundary, BoundaryBuilder, boundaryBuilder } from "./Boundary";
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
                    case "-": this.boundaries.push(boundaryBuilder.setSize(BoundaryBuilder.Width,BoundaryBuilder.Height).setPosition(x*BoundaryBuilder.Width,y*BoundaryBuilder.Height).build());
                        break;
                    default:
                        break;
                }
            })
        })

    }
    draw(ctx:CanvasRenderingContext2D){
        this.boundaries.forEach(boundary => boundary.draw(ctx));
    }
}