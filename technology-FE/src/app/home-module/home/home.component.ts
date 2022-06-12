import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {HomeService} from "../service/home.service";
import {map} from "rxjs/operators";

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
  amountProducts: number;

  /* Define size page and current page */
  sizePage:number = this.homeService.sizePage;
  totalPage: number = 0;
  totalPageSurplus: number = 0;
  totalPageArray: Array<any>;
  currentPage: number = 0;

  /* Active button */
  activedButton = 1;

  /* Count current page */
  lastButton: number;


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

    this.homeService.getAmountOfProducts().subscribe(data=> {
      this.amountProducts = data;
      this.pagination(data);
    })
  }

  /* Check click section sale */
  clickSale(input?: number) {
    this.clickedSale = input;
  }

  /* Pagination for home page */
  pagination(amountProducts: number) {
    this.totalPage = Math.floor(amountProducts / this.sizePage);
    this.totalPageSurplus = Math.floor(amountProducts % this.sizePage);
    if(this.totalPageSurplus % 2 != 0) {
      this.totalPageArray = Array(this.totalPage + 1).fill(1).map((x,i)=>i);
    } else {
      this.totalPageArray = Array(this.totalPage).fill(1).map((x,i)=>i);
    }

    /* Get location last button */
    this.lastButton = Math.floor(this.currentPage / this.sizePage);
  }

  /* Check button next and prev */
  nextPage() {
    this.currentPage += this.sizePage;
    this.homeService.nextPage(this.currentPage);
    this.getAll();

    /* Check location current page */
    this.checkActiveButton(this.currentPage)
  }

  prevPage() {
    this.currentPage -= this.sizePage;
    this.homeService.prevPage(this.currentPage);
    console.log(this.currentPage);
    this.getAll();

    /* Check location current page */
    this.checkActiveButton(this.currentPage)
  }

  /* Redirect other page */
  redirectPagination(tg: any) {
    /* Check active button */
    this.homeService.getAmountOfProducts().subscribe(data => {
      /* Get amounts of all products */
      this.currentPage = 1;
      this.amountProducts = data;

      /* Handle first page */
      if(tg == 1) {
        this.currentPage = 0;
      }

      if (this.amountProducts % tg != 0) {
        tg -= 1;
        this.currentPage = tg * this.sizePage;
      }

      if(tg != 1 && this.amountProducts % tg == 0) {
        this.currentPage = tg * this.sizePage;
      }
      this.homeService.redirectPagination(this.currentPage);

      /* Check location current page */
      this.checkActiveButton(this.currentPage);
      this.getAll();
    });
  }

  /* Check active button and get location current of page */
  checkActiveButton(currentPage: number) {
    this.activedButton = Math.round(currentPage / this.sizePage) + 1;
    console.log(this.activedButton);
  }
}
