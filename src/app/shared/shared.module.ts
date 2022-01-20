import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [FiltrosComponent],
  imports: [CommonModule, CoreModule],
  exports: [FiltrosComponent],
})
export class SharedModule {}
