import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiStartPoint:string="https://onlinetestapi.gerasim.in/api/OnlineTest/";

  constructor(private http:HttpClient) { }


  get(method:any):Observable<any>{
    return this.http.get(this.apiStartPoint+method);
  }

  post(method:any,object:any):Observable<any>{
    return this.http.post(this.apiStartPoint+method,object);
  }

}
