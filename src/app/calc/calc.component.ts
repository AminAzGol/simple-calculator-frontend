import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

// const ServerURL = 'http://141.11.246.83:7070'
const ServerURL = 'http://localhost:7070'

interface CalcOperation {
  a: string;
  b:string;
  op:string;
  result:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  
  result = 0.0
  a = 0
  b = 0
  op = '*'

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  calc(event: Event){
    console.log(event)
    var self = this
    
    this.http.post<CalcOperation>(ServerURL+'/calc', 
    {
      a: this.a,
      b: this.b,
      op: this.op
    }).subscribe(data=>{
      self.result = parseInt(data.result)
    })
  }
}
