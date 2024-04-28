import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Solicitud} from "../componentes/solicitud";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  urlRest  = 'http://localhost:4864/api/solicitudes/';

  private httpClient = inject(HttpClient)

    httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

    public listar() {
      return this.httpClient.get<Solicitud[]>(this.urlRest+'', this.httpOptions);
    }
  }
