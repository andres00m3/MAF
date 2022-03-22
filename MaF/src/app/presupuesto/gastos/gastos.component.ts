import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/app/models/Categoria';
import { Types } from 'src/app/models/Types';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
 public categoria: Categoria[] = [];
  constructor(private appService: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.categoria = this.presupuestoService.getTypes(Types.Gasto)
  }
  guardar(){
   this.presupuestoService.guardarTransaccion();
  }
}
