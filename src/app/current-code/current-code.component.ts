import { Component, OnInit } from '@angular/core';
import { allCodes } from '../all-codes';

@Component({
  selector: 'app-current-code',
  templateUrl: './current-code.component.html',
  styleUrls: ['./current-code.component.scss']
})
export class CurrentCodeComponent implements OnInit {
  // Variables needed for game state
  allCodes = allCodes;
  usedCodes = [];
  currCode = null;
  score = 0;
  attempts = 0;
  img = null;

  answers = [];

  constructor() {}

  ngOnInit(): void {
    // Get a status code that hasn't been used in the game yet
    // Updates image and answers on page
    this.getNewCode();
  }

  // Click handler that checks if answer is correct
  checkAnswer(isCorrect) {
    this.attempts++;

    if (isCorrect)
      this.score++;
      this.getNewCode();
  }

  // Functions used to implement game logic

  // Get new image
  updateImg(code) {
    console.log("In img, code is:", code);
    this.img = 'https://http.cat/' + code;
  }

  // Get unused code from our list of code objects
  getNewCode() {
    while(true) {
      let index = Math.floor(Math.random() * Math.floor(this.allCodes.length));
      
      // If this status code hasn't been used in the game yet
      if (!this.usedCodes.includes(this.allCodes[index].number)) {
        this.usedCodes.push(this.allCodes[index].number);
        this.updateImg(this.allCodes[index].number);
        this.getWrongAnswers(this.allCodes[index]);
        return this.allCodes[index];
      }
    }
  }

  // Fill answers array with the correct and 3 wrong answers, randomly arranged
  getWrongAnswers(correctCode) {
    // Clear old answers
    this.answers = [];
    let answerCodes = [correctCode.number];
    let index;

    // Place correct answer randomly in answers array
    this.answers[Math.floor(Math.random() * Math.floor(4))] = {
      phrase: correctCode.phrase,
      correct: true
    };

    // Place wrong answers
    for (let i=0; i<4; i++) {
      console.log("i:", i);

      while(true) {
        // If this index in answers[] already has correct answer object, skip this index
        if (this.answers[i])
          break;

        index = Math.floor(Math.random() * Math.floor(this.allCodes.length));

        // If this status code isn't being used in answers[] yet, add it to answers[]
        if (!answerCodes.includes(this.allCodes[index].number)) {
          answerCodes.push(this.allCodes[index].number);
          this.answers[i] = {
            phrase: this.allCodes[index].phrase,
            correct: false
          };
          break;
        }
      }
    }
  }

}
