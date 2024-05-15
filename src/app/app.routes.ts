import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'registro',
    loadComponent: () => import('./componentes/solicitudesform/solicitudesform.component')
  }
];
