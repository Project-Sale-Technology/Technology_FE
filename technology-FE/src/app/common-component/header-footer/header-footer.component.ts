import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  /* Get name for current page */
  @Input() currentPage = 'Login';

  constructor() { }

  ngOnInit(): void {
  }

}
