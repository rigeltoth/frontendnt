import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { MatIconModule } from '@angular/material/icon'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
