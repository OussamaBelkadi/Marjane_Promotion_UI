import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductDto} from "../../module/productDto";
import {PromotionDto} from "../../module/promotionDto";
import {PromotionService} from "../services/promotion.service";

@Component({
  selector: 'app-new-promotion',
  templateUrl: './new-promotion.component.html',
  styleUrls: ['./new-promotion.component.css']
})
export class NewPromotionComponent implements OnInit{
  public promotionForm!:FormGroup;
  private bodyCreatePromo!:Array<any>;
   produit!: any;
  private requestBody:any;
  constructor(private fb: FormBuilder, private promotionService:PromotionService) {
  }
  ngOnInit() {
    this.getProduct();
    this.promotionForm = this.fb.group({
      produit : this.fb.control(''),
      description: this.fb.control(''),
      dateDebut: this.fb.control(''),
      dateFin: this.fb.control(''),
      status: this.fb.control(''),
      precentage : this.fb.control('0', Validators.max(90))

    })
  }
  getProduct(){
    this.promotionService.getProduit().subscribe({
        next: value => {
          this.produit = value
        }
      }
    )
  }

  savePromotion(){
    let formValue = this.promotionForm.value;
    const productId = formValue.produit;
    const descr = formValue.description;
    const dateDebut = formValue.dateDebut;
    const datefin = formValue.dateFin;
    const percentage = formValue.precentage;
    const status:string = "EN_ATTENTE";

    const productDto = new ProductDto(productId)
    const promotionDto =new PromotionDto(descr,dateDebut,datefin, percentage,status)
    this.requestBody = {
      produitDto: productDto,
      promotionDto: promotionDto
    }
    this.promotionService.ajouterPromotion(this.requestBody).subscribe({
        next: value =>{
          this.requestBody=value;
        },
        error: err => console.log(err)
      }

    )
    console.log(this.requestBody)
  }
}
