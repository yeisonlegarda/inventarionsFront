import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { EstadosService } from 'src/app/services/estados.service';
import { AreasService } from 'src/app/services/areas.service';
import { TiposproductoService } from 'src/app/services/tiposproducto.service';
import { PersonasService } from 'src/app/services/personas.service';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: []
})
export class CreateproductComponent implements OnInit {
  producto:any={
    nombre:"",
    serialnb:"",
    cantidad:0,
    precio:0,
    fecha_compra:new Date(),
    valor_compra:0,
    tipo:0,
    estado_actual:0,
    responsable:0,
    descripcion:""
  };
  id:string;
  areas:any;
  personas:any;
  tipos:any;
  estados:any;
  constructor(private router:Router,
              private productoService:ProductosService,
              private activatedRoute:ActivatedRoute,
              private estadosService:EstadosService,
              private personasService:PersonasService,
              private areasService:AreasService,
              private tiposProductoService:TiposproductoService) {
      this.activatedRoute.params.subscribe(
        parametros=>{
          this.id = parametros['id'];
          if(this.id!="nuevo"){
            this.productoService.getProducto(this.id)
            .subscribe(producto=>{
              this.producto=producto;
            });
          }
        }
      );

      this.areasService.listareas()
          .subscribe(areas=>{
                    this.areas=areas;
        });

        this.personasService.listpersonas()
            .subscribe(personas=>{
                      this.personas=personas;
          });

          this.tiposProductoService.listTipos()
              .subscribe(tipos=>{
                        this.tipos=tipos;
            });

            this.estadosService.listEstados()
                .subscribe(estados=>{
                          this.estados=estados;
              });

              }

  ngOnInit() {

  }

  guardar(){
  let fecha = this.producto.fecha_compra;
  this.producto.fecha_compra = fecha['year'] + "-" + fecha['month'] + "-" + fecha['day'];
  if(this.id=="nuevo"){
    this.productoService.createProducto(this.producto)
    .subscribe(data=>{
      Swal.fire(
          'Ok!',
          'Producto Creado!',
          'success'
        ).then((result) => {
        this.router.navigate(['/listar']);
      })
    },
    error=>{
      Swal.fire(
          'Error!',
          'Falla al crear producto',
          'error'
        )
      console.error(error)
    }

    );
  }else{
    this.productoService.updateProducto(this.producto,this.id)
    .subscribe(data=>{
        console.log(data);
    },
    error=>{
      console.error(error);
      Swal.fire(
          'Error!',
          'Falla al actualizar producto',
          'error'
        );
    }
    );
  }
}

}
