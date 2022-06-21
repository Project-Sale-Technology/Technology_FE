import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HomeService} from "../../home-module/service/home.service";
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css']
})
export class HeaderMiddleComponent implements OnInit {
  /* Initialize Form Search */
  headerFormSearch: FormGroup;
  /* Share data for parent */
  @Output() productSearch = new EventEmitter<Product[]>();

  optionFormDefault = 1;

  /* Define variables */
  categories: Category[];

  constructor(private homeService: HomeService , private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAll();

    /* Define variable for form */
    this.headerFormSearch = this.fb.group({
      category: [''],
      formInput: ['']
    })

    /* Set default value for form */
    this.headerFormSearch.get('category').setValue(this.optionFormDefault , {onlySelf: true});
  }

  /* Get all */
  getAll() {
    this.homeService.getAllCategories().subscribe(data=> {
      this.categories = data;
    })
  }

  searchProduct() {
    const productName = this.headerFormSearch.get('formInput').value;
    const category = this.headerFormSearch.get('category').value;
    this.homeService.searchByNameAndCategory(productName , category).subscribe(data=> {
      this.productSearch.emit(data);
    })
  }
}
