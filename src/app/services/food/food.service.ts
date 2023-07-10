import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Patates kızartması',
        price: 4,
        tags: ['Fast-food', 'Delicious', 'All'],
        favorite: true,
        imageUrl: '/assets/images/foods/food-1.jpg',
        origins: ['potato'],
        cookTime: '5-10'
      },
      {
        id: 2,
        name: 'Pizza',
        price: 12,
        tags: ['Fast-food', 'Margarita', 'All', 'Fry'],
        favorite: true,
        imageUrl: '/assets/images/foods/food-2.jpg',
        origins: ['dough', 'cheese', 'ham', 'mushroom', 'corn'],
        cookTime: '15-20'
      },
      {
        id: 3,
        name: 'Köfte',
        price: 12,
        tags: ['Hand made', 'Healty', 'All', 'Fry'],
        favorite: true,
        imageUrl: '/assets/images/foods/food-3.jpg',
        origins: ['meat', 'souce'],
        cookTime: '10-15'
      },
      {
        id: 4,
        name: 'Chicken fry',
        price: 4,
        tags: ['Chicken'],
        favorite: true,
        imageUrl: '/assets/images/foods/food-4.jpg',
        origins: ['Lunch', 'chicken', 'All', 'Fry'],
        cookTime: '10-15'
      },
      {
        id: 5,
        name: 'Salad',
        price: 4,
        tags: ['Healty', 'Lunch', 'All'],
        favorite: true,
        imageUrl: '/assets/images/foods/food-5.jpg',
        origins: ['lemon', 'greens', 'tomato'],
        cookTime: '5-10'
      },
      {
        id: 6,
        name: 'Soup',
        price: 4,
        tags: ['Healty', 'All', 'Lunch'],
        favorite: true,
        imageUrl: '/assets/images/foods/food-6.jpg',
        origins: ['water', 'meat-chicken'],
        cookTime: '5'
      }
    ];
  }

  getFoodById(id: number): Food | undefined {
    return this.getAll().find(food => food.id === id);
  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag === 'All') {
      return this.getAll();
    } else {
      return this.getAll().filter(food => food.tags?.includes(tag));
    }
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Fast-food', count: 2 },
      { name: 'Pizza', count: 4 },
      { name: 'Lunch', count: 3 },
      { name: 'Chicken', count: 1 },
      { name: 'Soup', count: 2 },
      { name: 'Fry', count: 3 }
    ];
  }
}
