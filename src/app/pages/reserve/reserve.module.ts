import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReserveRoutingModule } from './reserve-routing.module';
import { ReserveComponent } from './reserve.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from'@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MypipePipe } from 'src/app/pipes/mypipe.pipe';

@NgModule({
  declarations: [ MypipePipe,ReserveComponent],
  imports: [
    CommonModule,
    ReserveRoutingModule,
  
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
  ]
})
export class ReserveModule { }
