import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  areasURL:string = "http://127.0.0.1:8000/api/v1/areas/";

  constructor(private http:HttpClient) { }

  listareas(){
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });
    return this.http.get(this.areasURL,{headers})
    .pipe(map(res=>{
      return res;
    }));
}
}
