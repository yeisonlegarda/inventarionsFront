import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personasURL:string = "http://127.0.0.1:8000/api/v1/personas/";

  constructor(private http:HttpClient) { }

  listpersonas(){
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });
    return this.http.get(this.personasURL,{headers})
    .pipe(map(res=>{
      return res;
    }));
}
}
