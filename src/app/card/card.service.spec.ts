import { TestBed, inject } from '@angular/core/testing';

import { CardService } from './card.service';

describe('CardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardService]
    });
  });

  it('should be created', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the card list', inject([CardService], (service: CardService) => {
    const cards = [{ displayValue: '0', value: '0' }];
    spyOn(service, 'getCards').and.callFake(function() {
      return Promise.resolve(cards);
    });
    service.getCards().then(cardsResponse => {
      expect(cardsResponse).toBeTruthy();
      expect(cardsResponse.length).toBe(cards.length);
    });
  }));

  it('should get a single card', inject([CardService], (service: CardService) => {
    const existentCardValue = 'p';
    const card = { displayValue: 'p', value: 'p' };
    spyOn(service, 'getCardByValue').and.callFake(function() {
      return Promise.resolve(card);
    });

    service.getCardByValue(existentCardValue).then(cardsResponse => {
      expect(cardsResponse).toBeTruthy();
      expect(cardsResponse.value).toBe(card.value);
    });
  }));

  it('should throw an error', inject([CardService], (service: CardService) => {
    const errMsg = 'Bad request';
    spyOn(service, 'getCardByValue').and.callFake(function() {
      return Promise.reject(errMsg);
    });

    service.getCardByValue('p').catch(cardsResponse => {
      expect(cardsResponse).toBe(errMsg);
    });
  }));
});
