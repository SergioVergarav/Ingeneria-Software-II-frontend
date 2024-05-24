import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'solicitudes',
    loadComponent: () => import('./componentes/solicitudes/solicitudes.component')
  },
  {
    path: 'tarjetas',
    loadComponent: () =>import('./componentes/tarjetas/tarjetas.component')
  },
  {
    path: 'registro',
    loadComponent: () => import('./componentes/solicitudesform/solicitudesform.component')
  },
  {
    path: 'pagos',
    loadComponent: () => import('./componentes/pagosform/pagosform.component')
},
{
    path: '',
    loadComponent: () => import('./componentes/inicio/inicio.component')
  }
];
