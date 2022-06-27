import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
export class HomeContactComponent implements OnInit {

  /* set name for current page */
  currentPage = 'Contact Us'

  constructor() { }

  ngOnInit(): void {
  }

}
