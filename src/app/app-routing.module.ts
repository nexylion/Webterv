import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'masseur', loadChildren: () => import('./pages/masseur/masseur.module').then(m => m.MasseurModule),
  canActivate: [AuthGuard]},
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'reserve', loadChildren: () => import('./pages/reserve/reserve.module').then(m => m.ReserveModule) /* ,canActivate: [AuthGuard] */},
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }