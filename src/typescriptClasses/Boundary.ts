export class Boundary {
    position: any;
    width:number = 0;
    height:number = 0;
    constructor() {
    }
}
export function newBoundary({width,height,position}){
    let newBoundary = new Boundary();
    newBoundary.height = height;newBoundary.position= position; newBoundary.width = width
    return newBoundary;
}