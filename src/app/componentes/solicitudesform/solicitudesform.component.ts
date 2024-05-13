import {Component, inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SolicitudService} from "../../servicios/solicitud.service";
import {Solicitud} from "../solicitud";
import {Observable} from "rxjs";
import {response} from "express";

@Component({
  selector: 'app-formulariosform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './solicitudesform.component.html',
  styleUrl: './solicitudesform.component.css'
})
export class SolicitudesformComponent implements OnInit{
  form: FormGroup ;
private fb = inject(FormBuilder);

private solicitudService = inject(SolicitudService);
resultado = '';
constructor() {
  this.form = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['',[Validators.required]],
    celular: ['',[Validators.required]],
    correo: ['',[Validators.required]],
    documento: ['',[Validators.required]],
    salario: ['',[Validators.required]],
    gastos: ['',[Validators.required]]

  });
}
ngOnInit(): void {

}
guardar(){
  console.log(this.form)
  const solicitud = this.form!.value;
  this.solicitudService.guardar(solicitud).subscribe( (dato) =>{
    console.log('Guardo');
    this.resultado = 'Almaceno'
  });
}
}
