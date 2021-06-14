import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  constructor(private router:Router) { }
  isShown: boolean = false ; 


  ngOnInit(): void {
  }
       toggleShow() {

        this.isShown = ! this.isShown;
        
        }
}
