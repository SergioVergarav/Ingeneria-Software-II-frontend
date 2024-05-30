import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Solicitud} from "../componentes/solicitud";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  urlRest  = 'http://localhost:8746/api/solicitudes/';

  private httpClient = inject(HttpClient)

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  public listar(): Observable<Solicitud[]> {
    return this.httpClient.get<Solicitud[]>(this.urlRest+'all', this.httpOptions);
  }

  public detalle(id: number): Observable<Solicitud> {
    return this.httpClient.get<Solicitud>(this.urlRest+ `${id}`, this.httpOptions);
  }

  public crear(solicitud: Solicitud): Observable<Solicitud> {
    return this.httpClient.post<Solicitud>(this.urlRest+'registro', solicitud, this.httpOptions);
  }

  public obtener(id: number): Observable<Solicitud> {
    return this.httpClient.get<Solicitud>(this.urlRest+`${id}`, this.httpOptions);
  }

  public crearTarjeta(numerosolicitud: number) {
    return this.httpClient.post<Solicitud>(`${this.urlRest}crear-tarjeta/${numerosolicitud}`, this.httpOptions);
  }

  public eliminarSolicitud(numerosolicitud: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlRest}${numerosolicitud}`, this.httpOptions);
  }

}
