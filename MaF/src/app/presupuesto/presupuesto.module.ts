import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastosComponent } from './gastos/gastos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { RouterModule,Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PresupuestoService } from './service/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes =[
  {
    path: 'gastos', component: GastosComponent,
  },

  {
    path: 'ingresos', component: IngresosComponent,
  },

  {
    path: '**',redirectTo:'gastos'
  }
]

@NgModule({
  declarations: [
    GastosComponent,
    IngresosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,

    RouterModule.forChild(routes)
  ],
  providers:[
    PresupuestoService
  ]
})
export class PresupuestoModule { }
