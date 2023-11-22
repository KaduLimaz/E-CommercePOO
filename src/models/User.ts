import {Product} from "./Product"
export class User {
    constructor(
        private id: string,
        public name: string,
        public usarname: string,
        public email: string,
        public cart?: Product[]
    ){}

    addToCart(Product:Product): void{
        this.cart.push(Product)
        
    }
    removeFromCart(Product:Product):void{}
    showProducts():void{
        console.log("Products in Cart: ")
        for (const product of this.cart){
            console.log(`* - ${product.name}`)
        }
    }
}


