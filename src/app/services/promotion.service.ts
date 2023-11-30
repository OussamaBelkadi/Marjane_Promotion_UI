import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }

  public getProduct():Observable<any> {
    return this.http.get<Array<any>>("http://localhost:8889/products");
  }

  public checkProduct(product: any) :Observable<any>{
    return this.http.patch(`http://localhost:8889/products/${product.id}`,
      {checked:!product.checked})
  }
}
