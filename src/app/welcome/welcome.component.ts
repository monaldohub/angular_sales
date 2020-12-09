import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
      public router: Router
  ) { }

  ngOnInit() {
  }
  productSale(args){
      if(args == 'product'){
          this.router.navigate(['new_product']);
      }else{
          this.router.navigate(['sales']);
      }
  }
}
