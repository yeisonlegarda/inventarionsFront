import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ProductosService} from '../../services/productos.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {
  items = [];
  page = 1;
  pageSize=4;
  productos:any;
  loading:boolean=true;
  collectionSize=0;
  constructor(private router:Router,
              private productoService:ProductosService,
              private activatedRoute:ActivatedRoute) {
            this.productoService.listproductos()
                .subscribe(productos=>{
                          this.productos=productos;
                          this.collectionSize = this.productos.length;
                          this.loading=false;
              });
            }

  ngOnInit() {
  }

}
