import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ROUTES from '@helpers/constants/routes';
const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.AUTH,
    pathMatch: 'full'
  },
  {
    path: ROUTES.AUTH,
    loadChildren: () => import('@app/authantication/authantication.module').then(m => m.AuthanticationModule)
  },
  {
    path: ROUTES._,
    loadChildren: () => import('@content/layout/layout.module').then(m => m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
