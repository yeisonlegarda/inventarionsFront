import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ListaproductosComponent } from './component/listaproductos/listaproductos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from './services/productos.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaproductosComponent,
    CreateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
