import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./componentes/solicitudesform/solicitudesform.component')
  }
];
