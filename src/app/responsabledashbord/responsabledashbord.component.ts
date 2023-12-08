import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../services/promotion.service";

@Component({
  selector: 'app-responsabledashbord',
  templateUrl: './responsabledashbord.component.html',
  styleUrls: ['./responsabledashbord.component.css']
})
export class ResponsabledashbordComponent implements OnInit{
  promotion: any;
  requestPgPromotion!: any;
  responsePg!:any;
  requestPromotion: any = Array();
  constructor(private service_Responsable: PromotionService) {
  }
  ngOnInit() {
    this.getPromotion();
  }
  getPromotion(){
    this.requestPgPromotion = {
      'id': 1,
      'page': 0,
      'size': 10
    }
    this.service_Responsable.getPromotionResponsablePage(this.requestPgPromotion).subscribe(
      {
        next :data => {
          this.responsePg = data;
          this.promotion = this.responsePg.promotionList;
        }
      }
    )
  }
  accepterPromotion(id: number){

    this.requestPromotion = {
      responsableId: 6,
      promotionList:[
        {
          "id": id,
          "status": "ACCPETER"
        }
      ]
    }
     this.service_Responsable.acceptRefusePromotion(this.requestPromotion).subscribe(
      response => this.getPromotion()
    )

  }
  refuserPromotion(id: number){
    this.requestPromotion = {
      responsableId: 6,
      promotionList: [
        {
          "id"  : id,
          "status": "REFUSER"
        }
      ]
    }

    this.service_Responsable.acceptRefusePromotion(this.requestPromotion).subscribe(response =>
    this.getPromotion())


  }

}
