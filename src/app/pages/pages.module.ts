import { ValidacionNumeroDirective } from './../directives/validacion-numero.directive';
import { ValidacionDirective } from './../directives/validacion.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ValidacionDirective,
    ValidacionNumeroDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    HomeComponent,
    ValidacionDirective,
    ValidacionNumeroDirective
  ],
})
export class PagesModule { }
