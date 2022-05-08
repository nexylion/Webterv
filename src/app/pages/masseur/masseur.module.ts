import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasseurRoutingModule } from './masseur-routing.module';
import { MasseurComponent } from './masseur.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MasseurComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule,
    MasseurRoutingModule,
    MatCardModule,
    MatButtonModule

  ]
})
export class MasseurModule { }
