import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> 383e70b3b9c7ab6e4f3b93ccbe91fe543c106b3b

@Injectable({
  providedIn: 'root'
})
export class QuizService {

<<<<<<< HEAD
  constructor() { }

  getQuizzes() {
    //mocking up the data we will get from a web service call
    return [
      {name: 'Quiz 1', numberOfQuestions: 3}
      ,{name: 'Quiz 1', numberOfQuestions: 0}
      ,{name: 'Quiz 1', numberOfQuestions: 0}
    ]
=======
  constructor(private builtInAngularHttpClient: HttpClient) { }

  getQuizzes() {

    return this.builtInAngularHttpClient.get("https://modern-js.azurewebsites.net/api/HttpTriggerJS1?code=8XD3vN3ehHLdZacBQJQhgUnNst9202gdd5VM3kWCytDkz2nXhia6kA==&name=Mystery%20Quiz");

    // Mocking up the data we will ultimately get from a 
    // REST endpoint, or web service call...
    // return [
    //   { name: 'Quiz 1', numberQuestions: 3 }
    //   , { name: 'Quiz 2', numberQuestions: 0 }
    //   , { name: 'Quiz 3', numberQuestions: 0 }
    // ].map(x => ({
    //   name: x.name
    //   , numberOfQuestions: x.numberQuestions
    // }));
  }

  getNumberPromise(doYouWantMeToSucceed: boolean) {
    let p = new Promise<number> (
      (resolve, reject) => doYouWantMeToSucceed ? resolve(42) : reject("You got problems!")
    );

    return p;
>>>>>>> 383e70b3b9c7ab6e4f3b93ccbe91fe543c106b3b
  }
}
