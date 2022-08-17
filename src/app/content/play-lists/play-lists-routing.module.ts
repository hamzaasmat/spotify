import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayListsComponent } from './play-lists.component';

const routes: Routes = [
  {
    path: '',
    component: PlayListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayListsRoutingModule { }
