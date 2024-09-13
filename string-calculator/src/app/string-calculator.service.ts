import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}

  add(numbers: string): number {
    if (numbers === '') return 0;

    let delimiter = ',';
    let startIndex = 0;

    if (numbers.startsWith('//')) {
      const delimiterLineEnd = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterLineEnd);
      startIndex = delimiterLineEnd + 1;
    }

    const numbersString = numbers
      .substring(startIndex)
      .replace(new RegExp(`\\n|${delimiter}`, 'g'), ',');
    return numbersString
      .split(',')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
}
