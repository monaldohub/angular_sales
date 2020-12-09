import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from 'src/app/shared/cache.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
    productName: string;
    productId: number;
    productManager: string;
    startDate: Date;
  constructor(
      public cache: CacheService,
      public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.cache.productName = this.productName;
    this.cache.productId = this.productId;
    this.cache.productManager = this.productManager;
    this.cache.startDate = this.startDate;
    this.router.navigate(['sales']);
  }
  clear(){
    this.productName = null;
    this.productId = null;
    this.productManager = null;
    this.startDate = null;
  }
}
