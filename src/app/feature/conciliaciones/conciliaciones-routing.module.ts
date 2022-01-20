import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioFiltroComponent } from './components/inicio-filtro/inicio-filtro.component';
import { ConciliacionesComponent } from './conciliaciones.component';

const routes: Routes = [
  {
    path: '',
    component: ConciliacionesComponent,
    children: [
      {
        path: 'inicio',
        component: DashboardComponent
      },
      {
        path: 'filtrar',
        component: InicioFiltroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacionesRoutingModule { }
