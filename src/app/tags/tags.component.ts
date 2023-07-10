import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[]
  tags?:Tag[]

  constructor(private foodService:FoodService){}

  ngOnInit(){
    this.tags=this.foodService.getAllTags()
  }
}
