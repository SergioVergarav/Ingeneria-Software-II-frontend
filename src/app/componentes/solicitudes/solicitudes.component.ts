import { Component, OnInit, inject } from '@angular/core';
import {SolicitudService} from "../../servicios/solicitud.service";
import {RouterModule} from "@angular/router";
import {Solicitud} from "../solicitud";

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export default class SolicitudesComponent implements OnInit {

  isActivo = false;
  private solicitudService = inject(SolicitudService)

  Solicitudes: Solicitud[] = [];

  ngOnInit(): void {
    this.consultarSolicitudes();
  }
  consultarSolicitudes(){
    this.solicitudService.listar().subscribe((Solicitudes) => {
      this.Solicitudes = Solicitudes;
    });
  }

}