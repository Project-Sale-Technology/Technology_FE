import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* Set name for current page */
  currentPage = 'Registration';

  constructor() { }

  ngOnInit(): void {
  }

}
