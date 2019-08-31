import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosURL:string = environment.crudEndpoint+"estados/";

  constructor(private http:HttpClient) { }

  listEstados(){
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });
    return this.http.get(this.estadosURL,{headers})
    .pipe(map(res=>{
      return res;
    }));
}

}
