import { Component } from '@angular/core';
import {solicitudService} from "../../servicios/solicitud.service";
import {RouterModule} from "@angular/router";
import {solicitudes} from "../solicitudes";

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent implements OnInit {

  isActivo = false;
  private solicitudService = inject(solicitudService)

  solicitudes: Solicitudes[] = [];

  ngOnInit(): void {
      this.consultarSolicitudes();
    }
    consultarSolicitudes(){
      this.equipoServicio.listar().subscribe((solicitudes) => {
        this.solicitudes = solicitudes;
      });
    }

}
