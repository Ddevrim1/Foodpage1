import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food:Food | any;

  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService, private cartService:CartService, private router:Router){
  
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const id = Number(params['id']);
        this.food = this.foodService.getFoodById(id);
      }
    });
  }

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }


}
