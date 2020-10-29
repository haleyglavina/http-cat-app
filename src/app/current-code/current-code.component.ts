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
  score = 0;
  img = null;

  answers = [
    {
      phrase: 'Missing Content',
      correct: false
    },
    {
      phrase: 'Not Found',
      correct: true
    },
    {
      phrase: 'Teapot',
      correct: false
    },
    {
      phrase: 'Success',
      correct: false
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.getNewQuestion(404);
    this.usedCodes.push(404);
  }

  // Functions used to implement game logic

  // Get new image
  getNewQuestion(code) {
    this.img = 'https://http.cat/' + code;
    console.log("API data:", this.img);
  }

}
