import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasseurComponent } from './masseur.component';

const routes: Routes = [{ path: '', component: MasseurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasseurRoutingModule { }
