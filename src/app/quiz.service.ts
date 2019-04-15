import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes() {
    //mocking up the data we will get from a web service call
    return [
      {name: 'Quiz 1', numberOfQuestions: 3}
      ,{name: 'Quiz 1', numberOfQuestions: 0}
      ,{name: 'Quiz 1', numberOfQuestions: 0}
    ]
  }
}
