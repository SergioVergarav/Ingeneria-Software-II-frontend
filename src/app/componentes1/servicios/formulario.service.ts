import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Formulario} from "../../componentes1/formulario";

@Injectable({
  providedIn: 'root'
})
export class Formularioservice {


  urlRest  = 'http://localhost:8862/api/formulario/';

  private httpClient = inject(HttpClient)

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  public listar() {
    return this.httpClient.get<Equipo[]>(this.urlRest+'', this.httpOptions);
  }
  public detalle(id: number) {
    return this.httpClient.get<Equipo>(this.urlRest+ `${id}`, this.httpOptions);
  }

  public crear(formulario: Formulario) {
    return this.httpClient.post<Formulario>(this.urlRest,formulario, this.httpOptions);
  }

  public modificar(equipo: any) {
    console.log(equipo)
    return this.httpClient.put<Equipo>(this.urlRest,equipo, this.httpOptions);
  }
  public borrar(id: number) {
    return this.httpClient.delete(this.urlRest+ `${id}`, this.httpOptions);
  }
}
