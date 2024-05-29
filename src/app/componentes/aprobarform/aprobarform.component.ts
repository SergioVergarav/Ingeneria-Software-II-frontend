import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule  } from '@angular/router';
import { SolicitudService } from '../../servicios/solicitud.service';
import { Solicitud } from '../solicitud';
import { Observable } from "rxjs";
import { response } from "express";

@Component({
  selector: 'app-aprobarform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './aprobarform.component.html',
  styleUrl: './aprobarform.component.css'
})
export default class AprobarformComponent implements OnInit{
  form!: FormGroup;
  private fb = inject(FormBuilder);
  private solicitudService = inject(SolicitudService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  solicitud?: Solicitud;

  ngOnInit(): void {
    const numerosolicitud = this.route.snapshot.paramMap.get('numerosolicitud');
    if (numerosolicitud) {
      this.solicitudService.modificar(parseInt(numerosolicitud)).subscribe(solicitud => {
        this.solicitud = solicitud;
        this.form = this.fb.group({
          numerosolicitud: [{ value: solicitud.numerosolicitud, disabled: true }],
          nombre: [{ value: solicitud.nombre, disabled: true }],
          apellido: [{ value: solicitud.apellido, disabled: true }],
          cedula: [{ value: solicitud.cedula, disabled: true }],
          correo: [{ value: solicitud.correo, disabled: true }],
          celular: [{ value: solicitud.celular, disabled: true }],
          salario: [{ value: solicitud.salario, disabled: true }],
          gastos: [{ value: solicitud.gastos, disabled: true }],
          comentario: [solicitud.comentario || '', [Validators.required]]
        });
      });
    }
  }

  guardar(): void {
    if (this.form.invalid) {
      return;
    }

    const solicitud = { ...this.form.getRawValue(), numerosolicitud: this.solicitud?.numerosolicitud };
    solicitud.comentario = this.form.get('comentario')?.value;

    this.solicitudService.modificar(solicitud).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => console.error(err)
    });
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
