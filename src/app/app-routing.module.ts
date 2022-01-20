import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'conciliaciones/inicio', pathMatch: 'full' },
  {
    path: 'conciliaciones',
    loadChildren: () =>
      import('./feature/conciliaciones/conciliaciones.module').then(
        (mod) => mod.ConciliacionesModule
      ),
  },
  { path: '**', redirectTo: 'conciliaciones/inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
