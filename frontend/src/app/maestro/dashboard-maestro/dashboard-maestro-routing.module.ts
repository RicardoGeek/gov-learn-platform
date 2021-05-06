import { CursoMasterDetalleComponent } from './../curso-master-detalle/curso-master-detalle.component';
import { DashboardMaestroComponent } from './dashboard-maestro.component';
import { CursosMasterComponent } from './../cursos-master/cursos-master.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: DashboardMaestroComponent,
  children: [
    {
      path: 'dashboardMaestro',
      component: DashboardMaestroComponent,
    },
    {
      path: '',
      redirectTo: 'cursosAdmin',
      pathMatch: 'full',
    },
    { path: 'cursosAdmin', component: CursosMasterComponent },
    { path: 'cursoDetalleAdmin/:id', component: CursoMasterDetalleComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardMaestroRoutingModule {
}
