import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { MaterialModule } from '@app/core/shared/material.module';
import { ArtistService } from './services/artist.service';
import { IoPlayerModule } from 'io-player';


@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MaterialModule
  ],
  providers: [
    ArtistService
  ]
})
export class ArtistModule { }
