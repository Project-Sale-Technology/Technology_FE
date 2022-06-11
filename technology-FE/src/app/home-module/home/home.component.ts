import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {HomeService} from "../service/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* Check click sale product */
  clickedSale = 0;

  /* Define variables */
  products: Product[];
  categories: Category[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    /* Get all */
    this.getAll();
  }

  /* Get all value */
  getAll() {
    this.homeService.getAllProducts().subscribe(data=> {
      this.products = data;
    })

    this.homeService.getAllCategories().subscribe(data=> {
      this.categories = data;
    })
  }

  clickSale(input?: number) {
    this.clickedSale = input;
  }
}
