import { Component, OnInit } from '@angular/core';
import { bindCollapseLink } from '../../app.helpers';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

declare var jQuery:any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.pug',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMessage: string;
  products: Product[];

  constructor(private productService: ProductService) { }

  openNewProduct() {
    jQuery('.modal').modal('show');
  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error);
  }
  ngAfterViewInit() {
    bindCollapseLink();
  }
}
