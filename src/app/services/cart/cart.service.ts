import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/cart';
import { CartItem } from 'src/app/shared/models/cartItem';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      cartItem.food.price = cartItem.food.price * cartItem.quantity; // Fiyatı güncelle
      return;
    }
    this.cart.items.push(new CartItem(food, 1));
  }

  removeFromCart(foodId: number): void {
    const index = this.cart.items.findIndex(item => item.food.id === foodId);
    if (index !== -1) {
      this.cart.items.splice(index, 1);
    }
  }

  changeQuantity(foodId: number, quantity: number): void {
  const cartItem = this.cart.items.find(item => item.food.id === foodId);
  if (cartItem) {
    cartItem.quantity = quantity;
    cartItem.food.price = cartItem.food.price * cartItem.quantity; 
  }
}

  getCart(): Cart {
    return this.cart;
  }
}
