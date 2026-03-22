import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth-module').then((m) => m.AuthModule),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks-module').then((m) => m.TasksModule),
  },
  {
    path: '**',
    loadChildren: () => import('./modules/errors/errors-module').then((m) => m.ErrorsModule),
  },
];
