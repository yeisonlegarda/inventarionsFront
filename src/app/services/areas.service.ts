import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  areasURL:string = environment.crudEndpoint+ "areas/";

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
