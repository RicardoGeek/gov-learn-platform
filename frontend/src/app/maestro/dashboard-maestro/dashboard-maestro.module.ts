import { CursoMasterDetalleComponent } from './../curso-master-detalle/curso-master-detalle.component';
import { CursosMasterComponent } from './../../maestro/cursos-master/cursos-master.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import {ListboxModule} from 'primeng/listbox';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset';
import { DashboardMaestroRoutingModule } from './dashboard-maestro-routing.module';
import { DashboardMaestroComponent } from './dashboard-maestro.component';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  imports: [
    DashboardMaestroRoutingModule,
    SidebarModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    CardModule,
    CommonModule,
    DialogModule,
    FieldsetModule,
    InputTextModule,
    InputTextareaModule
  ],
  declarations: [
    CursosMasterComponent,
    DashboardMaestroComponent,
    CursoMasterDetalleComponent

  ],
})
export class DashboardMaestroModule {
}
