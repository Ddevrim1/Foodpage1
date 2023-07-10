import { Food } from "./food";

export class CartItem{
    constructor(food: Food, quantity: number) {
        this.food = food;
        this.quantity = quantity;
      }
    food!:Food;
    quantity:number=1;

    getPrice():number{
        return this.food.price * this.quantity
    }

}