import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Esma Suyolu'

  constructor() {
    this.name = 'nazime Suyolu'
    this.changeName('meryem karatas')
  }

  changeName(name: string): void {
    this.name = name
  }
}
