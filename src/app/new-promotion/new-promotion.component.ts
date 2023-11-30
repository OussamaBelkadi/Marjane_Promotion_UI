import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.css']
})
export class NewPromotionComponent implements OnInit{
  public promotionForm!:FormGroup;
  constructor(private fb:FormBuilder) {
  }
  ngOnInit() {
    this.promotionForm = this.fb.group({
      name : this.fb.control(''),
      price : this.fb.group(''),
      checked : this.fb.group(false)
    })
  }
  savePromotion(){

  }
}
