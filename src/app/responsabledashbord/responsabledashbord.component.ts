import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../services/promotion.service";

@Component({
  selector: 'app-responsabledashbord',
  templateUrl: './responsabledashbord.component.html',
  styleUrls: ['./responsabledashbord.component.css']
})
export class ResponsabledashbordComponent implements OnInit{
  promotion: any;
  requestPromotion: any = Array();
  constructor(private service_Responsable: PromotionService) {
  }
  ngOnInit() {
    this.getPromotion();
  }
  getPromotion(){
    this.service_Responsable.getPromotionResponsable(1).subscribe({
        next : data =>{
          this.promotion = data;
        },
        error: err =>{
          console.log(err);
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
