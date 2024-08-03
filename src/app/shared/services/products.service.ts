import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';
import { Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  prodArr : Array<Iproduct>=[
    {
      pname:"Samsung P12",
      pid:"11",
      pstatus:"Delivered",
      canReturn:1,
    },
    {
      pname:"Samsung s23",
      pid:"12",
      pstatus:"Delivered",
      canReturn:0,
    },
    {
      pname:"Samsung s24",
      pid:"13",
      pstatus:"Delivered",
      canReturn:1,
    },
  ]
  constructor(
    private _router : Router,
    private _snackBar : SnackBarService
  ) { }

  fetchAllProducts(){
    return this.prodArr
  }

  getProductDetails(id:string):Iproduct{
    return this.prodArr.find(prod=> prod.pid === id) as Iproduct
  }


  addProduct(product:Iproduct){
    this.prodArr.push(product);
    this._router.navigate(['/products']);
    this._snackBar.openSnackBar(`product ${product.pname} is added`)
  }

  updateProduct(updatedProdObj : Iproduct){
    let getIndex = this.prodArr.findIndex(prod => prod.pid === updatedProdObj.pid);
    this.prodArr[getIndex]= updatedProdObj;
    this._router.navigate(['/products']);
    this._snackBar.openSnackBar(`product ${updatedProdObj.pname} is updated`)
  }

  removePorduct(prodId:string){
    let getIndex =  this.prodArr.findIndex(prod=>prod.pid===prodId);
    let removeprod = this.prodArr[getIndex]
    this.prodArr.splice(getIndex,1);
     this._router.navigate(['/products']);
     this._snackBar.openSnackBar(`product ${removeprod.pname} is removed`)
  }
}
