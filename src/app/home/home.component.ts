import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../module/product.module";
import {PromotionService} from "../services/promotion.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Os:string = "os"
  products :Array<Product> = []  ;
  constructor(private http:HttpClient, private prometionService:PromotionService) {
  }
  ngOnInit(){
    this.prometionService.getProduct()
      .subscribe({
        // Tous passe bien
        next : data => {
          this.products = data
        },
        error: err =>{
          console.log(err)
        }

      })
  }

  handleCheckPromotion(product: Product){
    this.prometionService.checkProduct(product)
       .subscribe(
      {
        next :updateProduct => {
          product.checked=!product.checked;
        }
      }
    )
  }

}

