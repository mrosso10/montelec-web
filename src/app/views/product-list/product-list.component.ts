import { Component, OnInit } from '@angular/core';
import { bindCollapseLink } from '../../app.helpers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.pug',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    bindCollapseLink();
  }
}
