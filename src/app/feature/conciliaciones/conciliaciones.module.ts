import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConciliacionesRoutingModule } from './conciliaciones-routing.module';
import { ConciliacionesComponent } from './conciliaciones.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioFiltroComponent } from './components/inicio-filtro/inicio-filtro.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ConciliacionesComponent,
    DashboardComponent,
    InicioFiltroComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ConciliacionesRoutingModule,
    CoreModule,
    FormsModule,
    SharedModule,
  ],
})
export class ConciliacionesModule {}
