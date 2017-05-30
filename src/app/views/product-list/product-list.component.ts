import { Component, OnInit } from '@angular/core';
import { bindCollapseLink } from '../../app.helpers';

declare var jQuery:any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.pug',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  openNewProduct() {
    jQuery('.modal').modal('show');
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    bindCollapseLink();
  }
}
