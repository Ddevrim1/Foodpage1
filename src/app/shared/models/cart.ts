import { CartItem } from "./cartItem";

export class Cart{
    items :  CartItem[] = []

    getTotalPrice(): number {
        let totalPrice = 0;
        this.items.forEach(item => {
          totalPrice += item.food.price;
        });
      
        return totalPrice;
      }
      
}