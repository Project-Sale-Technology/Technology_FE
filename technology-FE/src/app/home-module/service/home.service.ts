import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";

const API_URL = "http://localhost:8080/home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /* Define size page and current page */
  currentPage: number = 0;
  sizePage: number = 8;

  /* Next and prev */
  nextPage(currentPage: number) {
    this.currentPage = currentPage;
  }

  prevPage(currentPage: number) {
    this.currentPage = currentPage;
  }

  redirectPagination(currentPage: number) {
    this.currentPage = currentPage;
  }

  /* Get all products */
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_URL}/products`);
  }

  /* Get categories */
  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${API_URL}/category`);
  }

  /* Get amount of products */
  getAmountOfProducts(): Observable<number> {
    return this.httpClient.get<number>(`${API_URL}/products/amount`);
  }

  /* Search by name and category id */
  searchByNameAndCategory(productName: string, categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_URL}/products/search/name=${productName}&category=${categoryId}`);
  }

  constructor(private httpClient: HttpClient) {
  }
}
