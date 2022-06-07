import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* Check click sale product */
  clickedSale = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickSale(input?: number) {
    this.clickedSale = input;
  }
}
