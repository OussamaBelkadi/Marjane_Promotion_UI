import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../services/promotion.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-statistic-promotion',
  templateUrl: './statistic-promotion.component.html',
  styleUrls: ['./statistic-promotion.component.css']
})
export class StatisticPromotionComponent implements OnInit {
  promotionData: any;
  constructor(private service: PromotionService) {
  }
  ngOnInit() {
    this.getStatistic()
  }


  getStatistic(){
    this.service.getStatisticPromo().subscribe({
      next: value => {
        this.promotionData = value;
      }
    })

  }

}
