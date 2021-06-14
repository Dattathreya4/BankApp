import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(private router:Router) { }
inboundClick=false;

  ngOnInit(): void {
  }
  gotoWelcomepage(){
    this.router.navigate(['/welcomepage']);   
    this.inboundClick=!this.inboundClick;
       }
}
