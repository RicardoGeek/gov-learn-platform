import { WorkspaceComponent } from './../workspace/workspace.component';
import { CursoDetalleAlumnoComponent } from './../curso-detalle-alumno/curso-detalle-alumno.component';
import { MisCursosComponent } from './../mis-cursos/mis-cursos.component';
import { CursosComponent } from './../cursos/cursos.component';
import { AsignacionComponent } from './../asignacion/asignacion.component';
import { DashboardAlumnoComponent } from './dashboard-alumno.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import { DashboardRoutingModule } from './dashboard-alumno-routing.module';
import {SidebarModule} from 'primeng/sidebar';
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    CardModule,
    CommonModule,
    DialogModule,
    FieldsetModule,
    CalendarModule,
    InputTextareaModule

  ],
  declarations: [
    DashboardAlumnoComponent,
    AsignacionComponent,
    CursosComponent,
    MisCursosComponent,
    CursoDetalleAlumnoComponent,
    WorkspaceComponent

  ],
})
export class DashboardModule {
}
