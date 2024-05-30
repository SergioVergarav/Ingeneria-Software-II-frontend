import {inject, Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pagos} from "../componentes/pagos";

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  urlRest="http://localhost:8746/api/pagos/";
  private httpClient = inject(HttpClient)

  httpOptions = { headers: new HttpHeaders({'Content-Type' : 'application/json'})};

  public crear(pago: Pagos){
    return this.httpClient.post<Pagos>(this.urlRest+'pagar',pago,this.httpOptions);
  }
  public obtener(id: number){
    return this.httpClient.get<Pagos>(this.urlRest+'${id}',this.httpOptions);
  }
}
