import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
inboundClick=false;
  ngOnInit(): void {
  }
  gotoRegister(){
 this.router.navigate(['/registerpage']);
 this.inboundClick=!this.inboundClick;
  }

  gotoLogin(){
    this.router.navigate(['/login']);
    this.inboundClick=!this.inboundClick;
     }

  gotoWelcomepage(){
    this.router.navigate(['/welcomepage']);   
    this.inboundClick=!this.inboundClick;
       }

      


}
