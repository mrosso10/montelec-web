import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

declare var jQuery:any;

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.pug',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct: Product = new Product;

  @Input() products;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  createProduct() {
    this.productService.create(this.newProduct)
      .then(product => {
        this.products.push(product);
        jQuery('.modal').modal('hide')
        // this.selectedHero = null;
      });
  }
}
