import { Component, OnInit, inject } from '@angular/core';
import {TarjetaService} from "../../servicios/tarjeta.service";
import {RouterModule} from "@angular/router";
import {Tarjeta} from "../tarjeta";

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export default class TarjetasComponent implements OnInit{

  private tarjetaService = inject(TarjetaService)

  Tarjetas: Tarjeta[] = [];

  ngOnInit() {
    this.consultarTarjetas();
  }
  consultarTarjetas(){
    this.tarjetaService.listar().subscribe((Tarjetas) => {
      this.Tarjetas = Tarjetas;
    });
  }
}
