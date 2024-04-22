import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {solicitudes} from "../componentes/solicitudes";

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private httpClient = inject(HttpClient)

    httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

    public listar() {
      return this.httpClient.get<solicitudes[]>(this.urlRest+'', this.httpOptions);
    }
  public detalle(id: number) {
      return this.httpClient.get<solicitudes>(this.urlRest+ `${id}`, this.httpOptions);
    }
  }
