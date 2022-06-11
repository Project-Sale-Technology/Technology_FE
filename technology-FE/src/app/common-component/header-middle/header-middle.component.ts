import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../home-module/service/home.service";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css']
})
export class HeaderMiddleComponent implements OnInit {

  /* Define variables */
  categories: Category[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  /* Get all */
  getAll() {
    this.homeService.getAllCategories().subscribe(data=> {
      this.categories = data;
    })
  }
}
