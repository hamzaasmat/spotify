import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthanticationRoutingModule } from './components/authantication-routing.module';
import { AuthanticationComponent } from './components/authantication.component';
import { AuthanticationService } from './services/authantication.service';
import { MaterialModule } from '@app/core/shared/material.module';


@NgModule({
  declarations: [
    AuthanticationComponent
  ],
  imports: [
    CommonModule,
    AuthanticationRoutingModule,
    MaterialModule
  ],
  providers:[
    AuthanticationService
  ]
})
export class AuthanticationModule { }
