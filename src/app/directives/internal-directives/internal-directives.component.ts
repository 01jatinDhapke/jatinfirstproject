import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-directives',
  templateUrl: './internal-directives.component.html',
  styleUrls: ['./internal-directives.component.css']
})
export class InternalDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
divClasses:string="yellow font-style";
error:boolean=true;
styleprop:string='30px'
ngStyleObject:any={'font-size':'25px'}

getClasses():string{
  return"yellow font-style";
}
//ngModel
fname:string="Rajj";
email:string="rag@gmail.com";
formData:any={fname:'',email:''}
//pipes demo
vardate=new Date();
someNumber: number=23.452;
fontSize:number=0;

GetSize(fs:number):string{
  let styleValue:string=fs + 'px';//20px
  return styleValue;
}

}
