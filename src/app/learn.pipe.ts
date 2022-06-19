import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'learn',
})
export class LearnPipe implements PipeTransform {
  birthday = new Date(1988, 3, 15);
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
