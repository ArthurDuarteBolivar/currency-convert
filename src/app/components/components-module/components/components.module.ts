import { FormsModule } from '@angular/forms';
import { LembreteComponentComponent } from './../../lembrete-component/lembrete-component.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './../../nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    NavBarComponent,
    LembreteComponentComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AppRoutingModule,
    LembreteComponentComponent,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    NavBarComponent,
    LembreteComponentComponent
  ]
})
export class ComponentsModule { }
