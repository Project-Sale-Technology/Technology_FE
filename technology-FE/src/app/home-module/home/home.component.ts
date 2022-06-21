import { Component, OnInit } from '@angular/core';
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

  /* Active button */

  /* Get value after search */
  productsSearch: Product[];

  /* Check current page */
  currentPage: number = 1;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    /* Get all */
    this.getAll();
  }

  /* Get all value */
  getAll() {
    this.homeService.getAllProducts().subscribe(data => {
      this.products = data;
    })

    this.homeService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  /* Check click section sale */
  clickSale(input?: number) {
    this.clickedSale = input;
  }

  /* Get value after search */
  getValueHeaderSearch(result: Product[]) {
    console.log(result)
    this.productsSearch = result;
  }

  showMess() {
    console.log('hi');
  }
}
