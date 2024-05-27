import { Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {PagosService} from "../../servicios/pagos.service";
import {Pagos} from "../pagos";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pagosform',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './pagosform.component.html',
  styleUrl: './pagosform.component.css'
})
export default class PagosformComponent implements OnInit{
  form?: FormGroup ;
  private fb = inject(FormBuilder);
  private pagoService = inject(PagosService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)
  pago? : Pagos;
  errors?: string[]

  guardar(){
    if (this.form?.invalid){
      return ;
    }
    let request: Observable<Pagos>;
    const pago = this.form?.value;

      request = this.pagoService.crear(pago);

    request.subscribe({
      next: () => {
        this.errors = []
        this.router.navigate(['/']);
      },
      error : response => {
        this.errors = response.error.errors;
      }
    });
  }


  ngOnInit(): void {
    const serial = this.route.snapshot.paramMap.get('serial');
    if (serial){
      this.pagoService.obtener(parseInt(serial)).subscribe(pago=>{
        this.pago = pago;
        this.form = this.fb.group({
          numerotar: [pago.numerotar,[Validators.required, Validators.pattern(/^\d{16}$/)]],
          monto: [pago.monto, [Validators.required]]
        });
      });
    }else{
      this.form = this.fb.group({
        numerotar: ['',[Validators.required, Validators.pattern(/^\d{16}$/)]],
        monto: ['',[Validators.required]]
      });
    }
  }
}
