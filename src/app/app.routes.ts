import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: 'otronuevo',
    loadComponent: () => import('./componentes1/formulariosform/formulariosform.Component')
  }
];
