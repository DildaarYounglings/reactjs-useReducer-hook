import { Boundary } from "./Boundary";

export class Level{
    tileMap = [
        ["-","-","-","-","-","-","-","-"],
        ["-"," "," "," "," "," "," ","-"],
        ["-"," "," "," "," "," "," ","-"],
        ["-"," "," "," "," "," "," ","-"],
        ["-"," "," "," "," "," "," ","-"],
        ["-"," "," "," "," "," "," ","-"],
        ["-"," "," "," "," "," "," ","-"],
        ["-","-","-","-","-","-","-","-"]
    ]
    boundaries:Boundary[] = [];
    draw(){
        this.tileMap.forEach((row,y)=>{
            row.forEach((column,x)=>{
                switch(column){
                    case "-": this.boundaries.push(new Boundary())
                        break;
                    default:
                        break;
                }
        })});
    }
}