import { JsonpClientBackend } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Injectable } from '@angular/core';
import { Categoria } from './models/Categoria';
import { transaccion } from './models/transacciones';

@Injectable({
  providedIn: 'root'
})
export class AppService {
private transacciones: transaccion[]=[];
private categoria: Categoria[]=[];
  constructor( ) { }

  public addTransaccion(tran: transaccion){
    this.transacciones.push(tran);
    this.setLocal(this.transacciones);
  }


public getTransacciones(){
 // return this.transsaciones;
  return this.getLocal();
}

// public getCategorias(){
//   return this.categoria;
// }


private setLocal(transacciones: transaccion[]){
localStorage.setItem('transacciones', JSON.stringify(transacciones))
}

private getLocal(): transaccion[]{
  const trans = localStorage.getItem("transacciones")
if(trans){
   return JSON.parse(trans) as transaccion[];
}else{
  this.setLocal([])
  return [];
   }
 }

}

