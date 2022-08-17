import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import * as ROUTES from '@helpers/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTES.HOME,
        pathMatch: 'full'
      },
      {
        path: ROUTES.HOME,
        loadChildren: () => import('@content/home/home.module').then(m => m.HomeModule),
      },
      {
        path: ROUTES.DASHBOARD,
        loadChildren: () => import('@content/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: ROUTES.ARTIST,
        loadChildren: () => import('@content/artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: ROUTES.PLAYLIST,
        loadChildren: () => import('@content/play-lists/play-lists.module').then(m => m.PlayListsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
