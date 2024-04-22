import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Formulario} from "../../componentes1/formulario";

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  rutaformulario = 'http://localhost:8862/api/formulario/'

  private httpClient = inject(HttpClient)
  constructor() { }

  consultarTodos(){
    return this.httpClient.get<Formulario[]>(this.rutaformularios);
  }

  guardar(formulario?: Formulario){
    return this.httpClient.post<any>(this.rutaformularios, formulario);
  }
}
