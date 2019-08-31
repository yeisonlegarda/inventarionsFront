import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiposproductoService {

  tiposPrURL:string = environment.crudEndpoint+ "tiposproducto/";

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
