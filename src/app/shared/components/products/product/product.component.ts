import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productId !: string;
prodObj !: Iproduct;
  constructor(
    private _routes : ActivatedRoute,
    private _prodSercive : ProductsService
  ) { }

  ngOnInit(): void {
    this.handleProdParams()
  }

  handleProdParams(){
    this._routes.params
    .subscribe((params:Params)=>{
      this.productId = params['productId'];
      if(this.productId){
        this.prodObj = this._prodSercive.getProductDetails(this.productId)
      }
    })
  }

  onRemove()
  
{
  let getConfirm = confirm('Do you want to delete?');
  if(getConfirm){
    this._prodSercive.removePorduct(this.productId)
  }
}
}
