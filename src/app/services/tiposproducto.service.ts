import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TiposproductoService {

  tiposPrURL:string = "http://127.0.0.1:8000/api/v1/tiposproducto/";

  constructor(private http:HttpClient) { }

  listTipos(){
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });
    return this.http.get(this.tiposPrURL,{headers})
    .pipe(map(res=>{
      return res;
    }));
}
}
