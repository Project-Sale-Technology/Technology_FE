import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";

const API_URL = "http://localhost:8080/home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /* Get all products */
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_URL}/products`);
  }

  /* Get categories */
  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${API_URL}/category`);
  }

  constructor(private httpClient: HttpClient) { }
}
