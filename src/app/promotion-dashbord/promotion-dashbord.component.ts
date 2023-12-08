import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../services/promotion.service";
import {data} from "autoprefixer";
import {DatePipe} from "@angular/common";
import {style} from "@angular/animations";

@Component({
  selector: 'app-promotion-dashbord',
  templateUrl: './promotion-dashbord.component.html',
  styleUrls: ['./promotion-dashbord.component.css'],
})
export class PromotionDashbordComponent implements OnInit{

  requestPgPromotion!: any;
  responsePg!:any;
  promotion!:any;
  page: number=4;
  generatePage(): number[]{
    return Array.from({ length: this.page }, (_, index) => index );  }
  size!: number;
  centreId:number = 1;
  i = Array

  getPromotion(){

    this.service_Promotion.getPromotionResponsable(1).subscribe({
      next : data =>{
        this.responsePg = data;
        this.promotion = this.responsePg.promotionList;
        this.page = this.responsePg.page + 1;
        this.size = this.responsePg.size;
      },
      error: err =>{
        console.log(err);
      }
    }
  )
  }

  constructor(private service_Promotion:PromotionService) {
  }
  ngOnInit() {
    this.changePageInit(this.page)

  }
  changePageInit(page:any){
    this.requestPgPromotion = {
      'id': this.centreId,
      'page': 0,
      'size': 2
    }
    this.service_Promotion.getPromotionResponsablePage(this.requestPgPromotion).subscribe(
      {
        next :data => {
          this.responsePg = data;
          this.promotion = this.responsePg.promotionList;
          console.log(data)
        }
      }
    )
  }
  changePage(page:any){
    this.requestPgPromotion = {
      'id': this.centreId,
      'page': page,
      'size': 2
    }
    this.service_Promotion.getPromotionResponsablePage(this.requestPgPromotion).subscribe(
      {
        next :data => {
          this.responsePg = data;
          this.promotion = this.responsePg.promotionList;
          console.log(data)
        }
      }
  )
  }

}
