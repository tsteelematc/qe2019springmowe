import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getQuizzes() {

    // Mocking up the data we will ultimately get from a 
    // REST endpoint, or web service call...
    return [
      { name: 'Quiz 1', numberOfQuestions: 3 }
      , { name: 'Quiz 2', numberOfQuestions: 0 }
      , { name: 'Quiz 3', numberOfQuestions: 0 }
    ];
  }
}
