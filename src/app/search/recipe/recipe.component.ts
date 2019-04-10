import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit 
{
  @Input() recipes: Recipe[];
  @Input() depth: number;
  @Output() eventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  forwardClickedElement($event)
  {
    let event =
    {
      depth: this.depth,
      elementIndex: $event.elementIndex,
      recipeIndex: $event.recipeIndex,
    }
    this.eventEmitter.emit(event);
  }
}
