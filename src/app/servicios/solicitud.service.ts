import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Solicitud} from "../componentes/solicitud";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  urlRest  = 'http://localhost:8744/api/solicitudes/';

  private httpClient = inject(HttpClient)

    httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

    public listar() {
      return this.httpClient.get<Solicitud[]>(this.urlRest+'all', this.httpOptions);
    }
    public detalle(id:number){
      return this.httpClient.get<Solicitud>(this.urlRest+ `${id}`, this.httpOptions);
    }
  public crear(solicitud: Solicitud){
    return this.httpClient.post<Solicitud>(this.urlRest+'registro',solicitud,this.httpOptions);
  }
  public obtener(id: number){
    return this.httpClient.get<Solicitud>(this.urlRest+'${id}',this.httpOptions);
  }
  modificar(solicitud: Solicitud): Observable<Solicitud> {
    return this.httpClient.post<Solicitud>(this.urlRest+'update', solicitud, this.httpOptions);
  }

}
