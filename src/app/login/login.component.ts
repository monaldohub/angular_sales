import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import sales from '../shared/sales.json'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 userName: string;
 userPassword: string;
 userDetails: any;
 incorrectUserData: boolean;
  constructor(
      public router: Router
  ) { }

  ngOnInit() {
      this.userDetails = sales.userDetails;
      console.log("User datea", this.userDetails);
  }
  onSubmit(){
      if(this.userName == this.userDetails.email && this.userPassword == this.userDetails.password){
          console.log("Success")
          this.incorrectUserData = false;
          this.router.navigate(['welcome']);
      }else{
          this.incorrectUserData = true;
      }
  }

}
