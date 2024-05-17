import { inject,Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tarjeta} from "../componentes/tarjeta";
import {Solicitud} from "../componentes/solicitud";

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  urlRest = 'http://localhost:8744/api/tarjetas/todas';

  private httpClient = inject(HttpClient)

    httpOptions = {headers: new HttpHeaders({'Content-Type':'Application/json'})};

  public listar() {
    return this.httpClient.get<Tarjeta[]>(this.urlRest+'', this.httpOptions);
  }
}
