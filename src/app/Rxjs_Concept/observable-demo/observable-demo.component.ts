import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs/'
import { first, map } from 'rxjs/operators'

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
restoMenu:string[]=['wadapav','idle','paneeer tika']
  constructor() { }

  ngOnInit(): void {
    //Example 1
    // fromEvent(document,'click').subscribe(()=>{
    //   console.log("cliked")
    // })

    //Example 2
  //   of(1,2,3).pipe(first()).subscribe((data)=>{console.log(data)})
  // }

  //Example 3

  // of(this.restoMenu).pipe(map(m=>{                    //"of" is nothing but it is use as a observable
  //   let obj:any={something:'',moreting:''};
  //   obj.something=m[0];
  //   obj.moreting=m[1]
  //   return obj;
  // })).subscribe((data)=>{
  //   console.log(data)})

  //   const observable=interval(2000)
  //   observable.subscribe(()=>{console.log("hi how are you")})
  // }

  //Example 4
  of(this.restoMenu).pipe(map(m=>{
    let obj:any={something:'',moreting:''};
    obj.something=m[0];
    obj.moreting=m[1]
    return obj;
  })).subscribe((data)=>{
    console.log(data)})

    // const observable=interval(2000)
    // observable.subscribe(()=>{console.log("hi how are you")})
  }

}


