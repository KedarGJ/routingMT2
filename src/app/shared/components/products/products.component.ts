import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/products';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
prodData !: Array<Iproduct>
  constructor(
    private _productService  : ProductsService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.prodData = this._productService.fetchAllProducts()
    this._router.navigate(['products',this.prodData[0].pid],{
      queryParams:{canEdit : this.prodData[0].canReturn},
      queryParamsHandling:'merge'
    })
  }

}
