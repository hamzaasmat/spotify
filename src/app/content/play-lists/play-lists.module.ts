import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayListsRoutingModule } from './play-lists-routing.module';
import { PlayListsComponent } from './play-lists.component';
import { PlayListsService } from './services/play-lists.service.component';


@NgModule({
  declarations: [
    PlayListsComponent
  ],
  imports: [
    CommonModule,
    PlayListsRoutingModule
  ],
  providers: [
    PlayListsService
  ]
})
export class PlayListsModule { }
