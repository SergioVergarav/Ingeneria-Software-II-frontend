import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent  implements OnInit {

  public active : boolean = false

  constructor() { }
  ngOnInit(): void {}

  setActive() : void {
    this.active = !this.active
  }

}
