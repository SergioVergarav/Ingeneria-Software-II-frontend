import {Component, inject, OnInit } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormularioService} from "../services/formularios.service";
import {Formulario} from "../../componentes1/formulario";

@Component({
  selector: 'app-formulariosform',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './formulariosform.component.html',
  styleUrl: './formulariosform.component.css'
})
export class FormulariosformComponent implements OnInit{
  form: FormGroup ;
  private fb = inject(FormBuilder);

  private formularioService = inject(FormularioService);
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
      const formulario = this.form!.value;
      this.formularioService.guardar(formulario).subscribe( (dato) =>{
        console.log('Guardo');
        this.resultado = 'Almaceno'
      });
    }
}


