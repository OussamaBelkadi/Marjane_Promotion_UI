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
  canSave = true;
  currentStyle: Record<string, boolean> = {};
  currentStypeMulti!: Record<string, string>;
  responsePg!:any;
  promotion!:any;
  page: number=4;
  generatePage(): number[]{
    return Array.from({ length: this.page }, (_, index) => index );  }
  size!: number;
  centreId:number = 1;
  i = Array
  count : number = 3
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
    this.changePage(this.page)
    this.setStyle()
    this.canMult()
  }
  changePage(page:any){
    this.canSave = !this.canSave;
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
        }
      }
  )
    console.log(this.canSave);

  }
  setStyle(){
    this.currentStyle={
      saveable: this.canSave
    }
    console.log(this.currentStyle)
  }
  can(){
    this.canSave = !this.canSave;
  }
  canMult(){
    this.currentStypeMulti = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.canSave ? 'bold' : 'normal',
    }
  }
}
