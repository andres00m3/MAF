
import { Categoria } from "./Categoria";
import { Types } from "./Types";

export interface transaccion{
  id:string;
  monto: number;
  fecha: Date;
  categoria: Categoria;


}
