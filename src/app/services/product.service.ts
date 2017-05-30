import { Injectable }              from '@angular/core';
import { Http, Response, RequestOptions, Headers }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private productsUrl = 'http://localhost:3000/products';  // URL to web API
  constructor (private http: Http) {}
  getProducts(): Observable<Product[]> {
    return this.http.get(this.productsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  create(product: Product): Promise<Product> {
    return this.http
      .post(this.productsUrl, JSON.stringify(product), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Product)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


}
