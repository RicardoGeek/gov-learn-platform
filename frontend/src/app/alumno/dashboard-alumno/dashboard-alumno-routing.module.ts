import { CursoDetalleAlumnoComponent } from './../curso-detalle-alumno/curso-detalle-alumno.component';
import { MisCursosComponent } from './../mis-cursos/mis-cursos.component';
import { CursosComponent } from './../cursos/cursos.component';
import { DashboardAlumnoComponent } from './dashboard-alumno.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WorkspaceComponent } from '../workspace/workspace.component';

const routes: Routes = [{
  path: '',
  component: DashboardAlumnoComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardAlumnoComponent,
    },
    {
      path: '',
      redirectTo: 'workSpace',
      pathMatch: 'full',
    },
    { path: 'cursos', component: CursosComponent },
    { path: 'workSpace', component: WorkspaceComponent },
    { path: 'miscursos', component: MisCursosComponent },
    { path: 'cursoDetalle/:id', component: CursoDetalleAlumnoComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
