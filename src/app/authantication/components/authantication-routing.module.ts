import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthanticationComponent } from './authantication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthanticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthanticationRoutingModule { }
