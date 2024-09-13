import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringCalculatorService {
  constructor() {}

  add(numbers: string): number {
    if (numbers === '') return 0;
    const normalizedNumbers = numbers.replace(/\n/g, ',');
    return normalizedNumbers
      .split(',')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
}
