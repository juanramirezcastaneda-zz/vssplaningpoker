import { Component, OnInit } from '@angular/core';
import { ICard } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  card: ICard = {
    displayValue: 'One',
    value: '1'
  };

  ngOnInit() {
  }

  setCardValue() {
    this.card = {
      displayValue: 'Fake',
      value: 'FakeValue'
    };
  }
}
