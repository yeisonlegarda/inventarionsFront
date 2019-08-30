import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaproductosComponent } from './component/listaproductos/listaproductos.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';

const routes: Routes = [
  {path:'listar',component:ListaproductosComponent},
  { path: 'producto/:id', component: CreateproductComponent },
  {path:'**',pathMatch:'full',redirectTo:'listar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
