import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import {first, map, scan} from 'rxjs/operators';


@Component({
  selector: 'app-actual-example-of-rxjs-with-http',
  templateUrl: './actual-example-of-rxjs-with-http.component.html',
  styleUrls: ['./actual-example-of-rxjs-with-http.component.css']
})
export class ActualExampleOFRxjsWithHttpComponent implements OnInit {

  users:any = [];

  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get("http://jsonplaceholder.typicode.com/users/")
    .subscribe((data: any) => {
      console.log(data);
      this.users = data;

    });
  }


  //Others Examples

  ngOnInit(): void {
// EXAMPLE 1
    // console.log("jut before observable creation.");
    // const obs = new Observable(sub =>{

    //   let data = 676;
    //   sub.next(data);
    //   sub.next(12);
    //   sub.next(456);
    //   console.log('im in obs');
    //   setTimeout(()=>{
    //     sub.next("hello im running after some time!");
    //   }, 3000);

    // })
    // console.log("jut before sub");

    // obs.subscribe((data) => {
    //   console.log(data)
    // });
    // console.log("jut after sub");
    //EXAMPLE 2

    // let RestoMenu: string[]  = ["Idli","Wada Paw", "Panir Tikka","Dosa"];
    // let ABC: Observable<string[]> = of(RestoMenu);

    // ABC.pipe(first()).subscribe((item) => {
    //   console.log(item);
    // });

    //EXAMPLE 3 same as of  EXAMPLE 2

    // let o1: Observable<string> = of("idli","wada", "Panir-Tikka")

    // o1.pipe(first(), map((id)=>{
    //   return id+"-sev";
    // })).subscribe((data)=>{
    //   console.log(data);
    // });

  }



}
