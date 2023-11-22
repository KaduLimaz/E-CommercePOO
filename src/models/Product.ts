import {User} from "./User"

export class Product{
    constructor(
        private id: string,
        public name: string,
        public value: number,
        
    ){}

    show():void{}
    private showDetails(): void{}
    comment(newcomment:string, users:User):void{}
    rate(rating:number, users:User):void{}
}