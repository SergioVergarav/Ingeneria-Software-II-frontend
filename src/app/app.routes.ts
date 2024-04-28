import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./componentes/solicitudes/solicitudes.component').then(m => m.SolicitudesComponent)
    }
  ];
