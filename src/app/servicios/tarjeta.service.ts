import { inject,Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tarjeta} from "../componentes/tarjeta";

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  urlRest = 'http://localhost:8744/api/tarjetas/todas';

  private httpClient = inject(HttpClient)

    httpOptions = {headers: new HttpHeaders({'Content-Type':'Application/json'})};

  public lista(id: number) {
    return this.httpClient.get<Tarjeta>(this.urlRest+`${id}`, this.httpOptions);
  }
}
