import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../services/promotion.service";

@Component({
  selector: 'app-statistic-promotion',
  templateUrl: './statistic-promotion.component.html',
  styleUrls: ['./statistic-promotion.component.css']
})
export class StatisticPromotionComponent implements OnInit {
  promotion: any;

  constructor(private service: PromotionService) {
  }
  ngOnInit() {
  }

}
