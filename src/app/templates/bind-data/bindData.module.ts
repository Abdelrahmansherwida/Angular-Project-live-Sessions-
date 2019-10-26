import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindDataRoutingModule } from '././bindData-routing.module';

import { ParentComponent } from './parent/parent.component';
import { SharedComponentsModule } from '../../sharedComponents/shared-components.module';
import { ChildComponent } from './child/child.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, EditComponent],
  imports: [CommonModule, BindDataRoutingModule, SharedComponentsModule]
})
export class BindDataModule {}
