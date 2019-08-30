import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productosURL:string = "http://127.0.0.1:8000/api/v1/productos/";

  constructor(private http:HttpClient) { }

  listproductos(){
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });
    return this.http.get(this.productosURL,{headers})
    .pipe(map(res=>{
      return res;
    }));
}
createProducto(producto:any){
  let body = JSON.stringify(producto);
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });

    return this.http.post(this.productosURL,body,{headers})
    .pipe(map(res=>{
      console.log(res);
      return res;
    }));
}
updateProducto(producto:any,id:string){
  let body = JSON.stringify(producto);
    let headers = new HttpHeaders({
      'content-Type':'application/json'
    });
    let url =`${this.productosURL}${id}`
    return this.http.put(url,body,{headers})
    .pipe(map(res=>{
      console.log(res);
      return res;
    }));
}
getProducto(id:string){
  let headers = new HttpHeaders({
    'content-Type':'application/json'
  });
  let url=`${this.productosURL}${id}`;
  return this.http.get(url,{headers})
  .pipe(map(res=>{
    console.log(res);
    return res;
  }));
}
}
