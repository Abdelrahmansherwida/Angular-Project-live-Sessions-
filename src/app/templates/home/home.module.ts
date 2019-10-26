import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/sharedComponents/shared-components.module';
@NgModule({
  imports: [CommonModule, SharedComponentsModule]
})
export class HomeModule {}
