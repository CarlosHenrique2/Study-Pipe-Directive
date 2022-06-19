import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color: string = 'yellow';
  birthday: any = new Date(1988, 3, 15);
  time: any = 600;
  money: number = 250.5;
  decimal: number = 3.14159265;
  porcent: number = 0.123456;
}
