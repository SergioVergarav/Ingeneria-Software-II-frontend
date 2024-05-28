import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SolicitudService } from "../../servicios/solicitud.service";
import { Solicitud } from "../solicitud";
import { Observable } from "rxjs";
import { response } from "express";

@Component({
  selector: 'app-formulariosform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './solicitudesform.component.html',
  styleUrl: './solicitudesform.component.css'
})
export default class SolicitudesformComponent implements OnInit {
  form?: FormGroup;
  private fb = inject(FormBuilder);
  private solicitudService = inject(SolicitudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  solicitud?: Solicitud;
  errors?: string[];

  guardar() {
    if (this.form?.invalid) {
      return;
    }
    let request: Observable<Solicitud>;
    const equipo = this.form!.value;

    request = this.solicitudService.crear(equipo);

    request.subscribe({
      next: () => {
        this.errors = [];
        this.router.navigate(['/']);
      },
      error: response => {
        this.errors = response.error.errors;
      }
    });
  }

  ngOnInit(): void {
    const serial = this.route.snapshot.paramMap.get('serial');
    if (serial) {
      this.solicitudService.obtener(parseInt(serial)).subscribe(solicitud => {
        this.solicitud = solicitud;
        this.form = this.fb.group({
          numerosolicitud: [solicitud.numerosolicitud],
          nombre: [solicitud.nombre, [Validators.required]],
          apellido: [solicitud.apellido, [Validators.required]],
          celular: [solicitud.celular, [Validators.required]],
          correo: [solicitud.correo, [Validators.required]],
          cedula: [solicitud.cedula, [Validators.required]],
          salario: [solicitud.salario, [Validators.required]],
          gastos: [solicitud.gastos, [Validators.required]],
          comentario: [solicitud.comentario || 'Escriba la razón por la que aprobó la tarjeta']
        });
      });
    } else {
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        apellido: ['', [Validators.required]],
        celular: ['', [Validators.required]],
        correo: ['', [Validators.required]],
        cedula: ['', [Validators.required]],
        salario: ['', [Validators.required]],
        gastos: ['', [Validators.required]],
        comentario: ['Escriba la razón por la que aprobó la tarjeta']
      });
    }
  }
}
