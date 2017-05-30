import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.pug',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  createProduct() {
    this.productService.create(this.newProduct)
      .then(product => {
        // this.heroes.push(hero);
        // this.selectedHero = null;
      });
  }
}
