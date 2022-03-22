import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


const routes: Routes = [
  {
    path:'', component: ListadoComponent
  }
]

@NgModule({
  declarations: [
    ListadoComponent,

  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    RouterModule.forChild(routes)
  ]

})
export class TransaccionesModule { }
