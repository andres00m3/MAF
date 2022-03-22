import { Injectable, Type } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Categoria } from 'src/app/models/Categoria';
import { transaccion } from 'src/app/models/transacciones';
import { Types } from 'src/app/models/Types';


@Injectable()
export class PresupuestoService {
public form:FormGroup;
//public transacciones: transaccion[]=[];
public categoria: Categoria[] = [{
  idc:"1", nombre: "Pasaje", type: Types.Gasto,
},
{
  idc:"2", nombre: "Cobro de luz", type: Types.Gasto,
},
{
  idc:"3", nombre:"Pago Nomina",  type: Types.INGRESO
},
{
  idc:"4", nombre:"Bonificaciones Anuales",  type: Types.INGRESO
}

]
  constructor(private formBuilder: FormBuilder, private appService:AppService) {
    this.form = this.formBuilder.group({
      monto:[''],
      fecha: [''],
      categoria:['']
    })
  }

  guardarTransaccion(){
   // this.form.get('type')?.setValue(type);
   // console.log(this.form.getRawValue())

   const tran: transaccion ={

     id: this.getId(),
     monto: this.form.get("monto")?.value,
     fecha: this.form.get("fecha")?.value,
     categoria: this.form.get("categoria")?.value,
  };

  this.appService.addTransaccion(tran);
}



  public getTypes(type: Types): Categoria[] {
    return this.categoria.filter(t => t.type === type)
  }

// private agregarTransaccion(transaccion:transaccion){
// this.transacciones.push(transaccion)
// console.table(this.transacciones)
// }

private getId(): string{
return Math.random().toString().substr(2);
}





}
