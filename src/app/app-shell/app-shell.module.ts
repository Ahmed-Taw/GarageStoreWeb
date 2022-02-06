import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NavBarComponent,
    AppShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule

  ],
  exports:[
    NavBarComponent,
    AppShellComponent
  ]
})
export class AppShellModule { }
