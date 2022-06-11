import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /* Get all products */
  getAllProducts() {

  }

  constructor(private httpClient: HttpClient) { }
}
