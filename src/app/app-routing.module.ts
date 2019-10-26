import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'bindData',
        loadChildren: () =>
          import('./templates/bind-data/bindData.module').then(
            m => m.BindDataModule
          )
      },

      {
        path: 'forms',
        loadChildren: () =>
          import('./templates/forms/forms.module').then(
            m => m.FormsComponentModule
          )
      },

      {
        path: 'home',
        loadChildren: () =>
          import('./templates/home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
