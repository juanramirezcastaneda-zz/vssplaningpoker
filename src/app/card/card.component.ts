import { Component, Input, OnInit } from '@angular/core';
import { ICard } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card: ICard;
  constructor() { }

  ngOnInit() {
  }

  setCardValue() {
    this.card = {
      displayValue: 'Fake',
      value: 'FakeValue'
    };
  }
}
