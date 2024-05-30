import { Component, OnInit, inject } from '@angular/core';
import {SolicitudService} from "../../servicios/solicitud.service";
import {RouterModule} from "@angular/router";
import {Solicitud} from "../solicitud";
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [  RouterModule],
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})

export default class SolicitudesComponent implements OnInit {

  private solicitudService = inject(SolicitudService);

  Solicitudes: Solicitud[] = [];

  ngOnInit(): void {
    this.consultarSolicitudes();
  }

  consultarSolicitudes() {
    this.solicitudService.listar().subscribe((Solicitudes) => {
      this.Solicitudes = Solicitudes;
    });
  }

  abrirSolicitud(numerosolicitud: number) {
    this.solicitudService.crearTarjeta(numerosolicitud).subscribe({
      next: () => {
        console.log('Tarjeta creada con éxito');
      },
      error: (err) => {
        console.error('Error al crear la tarjeta', err);
      }
    });
  }

  eliminarSolicitud(numerosolicitud: number) {
    if (confirm('¿Está seguro que desea eliminar esta solicitud?')) {
      this.solicitudService.eliminarSolicitud(numerosolicitud).subscribe({
        next: () => {
          console.log('Solicitud eliminada con éxito');
          this.consultarSolicitudes();
        },
        error: (err) => {
          console.error('Error al eliminar la solicitud', err);
        }
      });
    }
  }
}
