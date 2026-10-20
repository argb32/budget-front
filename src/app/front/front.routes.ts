import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './pages/home/home';
import { Analiticas } from './pages/analiticas/analiticas';
import { Movimientos } from './pages/movimientos/movimientos';

export const frontRoutes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'analiticas',
        component: Analiticas,
      },
      {
        path: 'movimientos',
        component: Movimientos,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default frontRoutes;
