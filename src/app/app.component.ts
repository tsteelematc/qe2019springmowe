import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title       = 'quiz-editor';
  myWidth     = 250;
  get titleColor() {
    return this.myWidth > 250 ? 'pink':'black';
  }

  increaseWidth = () =>
  {
    this.myWidth *= 1.5;
  }

  decreaseWidth = () =>
  {
    this.myWidth /= 1.5;
  }
}
