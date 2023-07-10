import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  searchTerm: string = '';

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.searchTerm = params['searchTerm'];
        this.filterFoods();
      } else if (params['tag']) {
        const tag = params['tag'];
        this.foods = this.foodService.getAllFoodsByTag(tag);
      } else {
        this.getAllFoods();
      }
    });
  }

  getAllFoods() {
    this.foods = this.foodService.getAll();
  }

  filterFoods() {
    const searchTerm = this.searchTerm.toLowerCase();
    this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(searchTerm));
  }
}
