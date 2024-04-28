import { Component, OnInit, inject } from '@angular/core';
import {SolicitudService} from "../../servicios/solicitud.service";
import {RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import {Solicitud} from "../solicitud";

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [ CommonModule,RouterModule],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

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
