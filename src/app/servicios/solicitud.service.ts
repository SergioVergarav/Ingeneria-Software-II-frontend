import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Solicitud} from "../componentes/solicitud";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  urlRest  = 'http://localhost:8744/api/solicitudes/all';

  private httpClient = inject(HttpClient)

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  public guardar(solicitud: Solicitud) {
    return this.httpClient.post<Solicitud>(this.urlRest,solicitud, this.httpOptions);
  }
}
