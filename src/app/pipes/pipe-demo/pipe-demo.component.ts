import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  email:string="raj@gmail.com";
  vardate=new Date();
  someNumber:number=23.3454487
  varGst=0.18
  profilePic:string=""
  someText:string=""


  constructor() { }

  ngOnInit(): void {
    this.profilePic='https://bit.ly/angular-pipe-img'
  }





}
