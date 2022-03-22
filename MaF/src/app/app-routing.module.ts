import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'transacciones',
    loadChildren: ( ) => import ('./transacciones/transacciones.module').then(m => m.TransaccionesModule)
  },
  {
    path:'presupuesto',
    loadChildren:() => import('./presupuesto/presupuesto.module').then(m =>m.PresupuestoModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
