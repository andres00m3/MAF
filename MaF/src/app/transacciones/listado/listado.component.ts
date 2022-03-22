import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { transaccion } from 'src/app/models/transacciones';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
// categoria = this.appService.getCategorias();

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    console.log(this.appService.getTransacciones());
  }

}
