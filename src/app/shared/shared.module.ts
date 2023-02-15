import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
 
@NgModule({
  declarations: [
    SidebarComponent
  ],
  //aqui creamos esto para exportar el sidebarComponer en los modulos
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
