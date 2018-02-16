import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ICard } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card: ICard;
  @Input('selectedValue') selectedValue: string;
  @Output() selectedValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setCardValue() {
    this.selectedValueChange.emit(this.card.displayValue);
  }
}
