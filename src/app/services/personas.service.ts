import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personasURL:string = environment.crudEndpoint+"personas/";

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
