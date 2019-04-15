import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private quizSvs : quizeService)

  quizzes     = [];
  this.quizzes = this.quizSvs.getQuizzes();
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

  get listBackgroundColor() {
    return this.myWidth > 250 ? true : false;
  }

}
