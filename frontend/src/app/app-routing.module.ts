
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'register', component: RegisterComponent },
{ path: 'confirm', component: ConfirmUserComponent },
{
  path: 'pages',
  loadChildren: () => import('./alumno/dashboard-alumno/dashboard-alumno.module')
    .then(m => m.DashboardModule),
},
{
  path: 'admin',
  loadChildren: () => import('./maestro/dashboard-maestro/dashboard-maestro.module')
    .then(m => m.DashboardMaestroModule),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
