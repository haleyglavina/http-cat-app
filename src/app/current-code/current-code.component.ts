import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-code',
  templateUrl: './current-code.component.html',
  styleUrls: ['./current-code.component.scss']
})
export class CurrentCodeComponent implements OnInit {
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

  score = 0;

  constructor() {}

  ngOnInit(): void {}

}
