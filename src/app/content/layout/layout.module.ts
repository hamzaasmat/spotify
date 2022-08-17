import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@app/core/shared/material.module';
import { LayoutService } from './services/layout.service';
import { IoPlayerModule } from 'io-player';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule,
  ],
  providers:[
    LayoutService
  ]
})
export class LayoutModule { }
