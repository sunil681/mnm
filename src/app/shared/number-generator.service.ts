import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {
  arrNumbers = [ 10, 20, 30 ];
  constructor() { }

  addNumber(num: number) {
    this.arrNumbers.push(num);
  }

  calculateSum(): number {
    return this.arrNumbers.reduce( (agg, cur) => {
      return agg + cur;
    }, 0);
  }
}
