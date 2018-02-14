import { Injectable } from '@angular/core';
import { ICard } from './card.model';

@Injectable()
export class CardService {

  constructor() { }

  private _fibonacciCards: Array<ICard> = [
    { displayValue: '0', value: '0' }, { displayValue: '1/2', value: '1/2' },
    { displayValue: '1', value: '1' }, { displayValue: '2', value: '2' },
    { displayValue: '3', value: '3' }, { displayValue: '5', value: '5' },
    { displayValue: '8', value: '8' }, { displayValue: '13', value: '13' },
    { displayValue: '21', value: '21' }, { displayValue: '?', value: '0' }
  ];

  getCards(): Promise<Array<ICard>> {
    return Promise.resolve(this._fibonacciCards);
  }

  getCardByValue(cardValue: string): Promise<ICard> {
    const rejectionMsg = 'The card is not defined';
    const card = this._fibonacciCards.find(c => c.value === cardValue);
    return card ? Promise.resolve(card) : Promise.reject(rejectionMsg);
  }
}
