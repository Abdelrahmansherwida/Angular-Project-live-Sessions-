import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { FormsRoutingModule } from './forms-routing.module';
import { SharedComponentsModule } from 'src/app/sharedComponents/shared-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, FormsRoutingModule, SharedComponentsModule],
  exports: [ReactiveFormsModule, FormsModule]
})
export class FormsComponentModule {}
