import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/componentes/dashboard/dashboard';
import { Inicio } from './inicio/componentes/inicio/inicio';
import { Productos } from './productos/componentes/productos/productos';
import { Usuarios } from './personas/componentes/usuarios/usuarios';
import { CarteraIndividual } from './productos/componentes/credito/cartera-individual/cartera-individual';
import { Landing } from './landingPage/componentes/landing/landing';
export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: '',
    component: Dashboard,
    children: [
      { path: 'landingPage', component: Landing },
      { path: 'productos', component: Productos },
      { path: 'personas', component: Usuarios },
      { path: 'productos/cartera-individual', component: CarteraIndividual },
      { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
    ],
  },
];
