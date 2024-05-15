import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Solicitud} from "../componentes/solicitud";

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  urlRest  = 'http://localhost:8744/api/solicitudes/';

  private httpClient = inject(HttpClient)

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  public crear(solicitud: Solicitud){
    return this.httpClient.post<Solicitud>(this.urlRest+'registro',solicitud,this.httpOptions);
  }
  public obtener(id: number){
    return this.httpClient.get<Solicitud>(this.urlRest+'${id}',this.httpOptions);
  }
}
