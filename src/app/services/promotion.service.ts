import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) { }

  getPromotionResponsable(centreid:any){
    return this.http.get(`${environment.apiUrl}/api/v1/promotions/${centreid}`)
  }

  acceptRefusePromotion(content: any){
    return this.http.post(`${environment.apiUrl}/api/v1/responsables-promotion`, content)
  }
  public getProduct():Observable<any> {
    return this.http.get<Array<any>>("http://localhost:8889/products");
  }

  public checkProduct(product: any) :Observable<any>{
    return this.http.patch(`http://localhost:8889/products/${product.id}`,
      {checked:!product.checked})
  }
}
