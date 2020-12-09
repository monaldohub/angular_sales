import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/shared/cache.service';
import sales from 'src/app/shared/sales.json'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
    salesData: any[] = sales.salesData;
    productName: string;
    productId: number;
    searchProduct: string;
    salesQ1: number;
    salesQ2: number;
    salesQ3: number;
    salesQ4: number;
  constructor(
    public cache: CacheService
  ) { }

  ngOnInit() {
      console.log("ddd",this.salesData)
      if(this.cache.productId){
        let data = {
            productID: this.cache.productId,
            productName: this.cache.productName,
            salesQ1: 100,
            salesQ2: 100,
            salesQ3: 100,
            salesQ4: 100,
            select: false
          }
        this.salesData.push(data)
      }
  }

  editProduct(id){
    this.salesData.forEach(item=>{
        if(item.productID == id){
            item.select = true;
            this.productName = item.productName;
            this.productId = item.productID;
            this.salesQ1 = item.salesQ1;
            this.salesQ2 = item.salesQ2;
            this.salesQ3 = item.salesQ3;
            this.salesQ4 = item.salesQ4;
        }
    })
  }

  saveeProduct(id){
    this.salesData.forEach(item=>{
        if(item.productID == id){
            item.select = false;
            if(this.productName){
                item.productName = this.productName;
                item.productID = this.productId;
                item.salesQ1 = this.salesQ1;
                item.salesQ2 = this.salesQ2;
                item.salesQ3 = this.salesQ3;
                item.salesQ4 = this.salesQ4;
            }
        }
    })
  }

  addProduct(){
    this.productName = null;
    this.productId = null;
    this.salesQ1 = null;
    this.salesQ2 = null;
    this.salesQ3 = null;
    this.salesQ4 = null;
      let data = {
        productID: "",
        productName: "",
        salesQ1: 0,
        salesQ2: 0,
        salesQ3: 0,
        salesQ4: 0,
        select: true
      }
    this.salesData.push(data)
  }
}
