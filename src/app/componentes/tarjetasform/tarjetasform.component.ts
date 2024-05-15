import { Component, OnInit, inject } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {TarjetaService} from "../../servicios/tarjeta.service";
import {Tarjeta} from "../tarjeta";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tarjetasform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './tarjetasform.component.html',
  styleUrls: ['./tarjetasform.component.css']
})
export default class TarjetasformComponent implements OnInit{

  private fb = inject(FormBuilder);
  private tarjetaServicio = inject(TarjetaService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  form? : FormGroup;
  tarjeta? : Tarjeta;


  ngOnInit(): void {

    this.form = this.fb.group({
      numerotarjeta: [''],
      fecha_vec: [''],
      documento: [''],
      cupo: [''],
      fecha_cor: [''],
      fecha_lim: [''],
      saldo: ['']
    });

    this.tarjetaServicio.lista(1).subscribe(tarjeta =>{
      this.tarjeta = tarjeta;
      this.form?.patchValue({
        numerotarjeta: tarjeta.numerotarjeta,
        fecha_vec: tarjeta.fecha_vec,
        documento: tarjeta.documento,
        cupo: tarjeta.cupo,
        fecha_cor: tarjeta.fecha_cor,
        fecha_lim: tarjeta.fecha_lim,
        saldo: tarjeta.saldo
      });
    });
  }
}
