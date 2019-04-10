import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Element } from '../../models/Element';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit 
{
  @Input() element: Element;
  @Input() quantity: number;
  @Input() elementIndex: number;
  @Input() recipeIndex: number;
  @Input() finalProduct?: boolean;
  @Output() eventEmitter = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() 
  {

  }

  onElementClick()
  {
    let event =
    {
      recipeIndex: this.recipeIndex,
      elementIndex: this.elementIndex
    }
    this.eventEmitter.emit(event);
  }

}
