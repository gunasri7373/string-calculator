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
    const nums = numbersString.split(',').map(Number);

    const negatives = nums.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return nums.reduce((a, b) => a + b, 0);
  }
}
