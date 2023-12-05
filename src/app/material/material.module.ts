import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'
import{MatCardModule}from '@angular/material/card'
import{MatDialogModule}from '@angular/material/dialog'









const modulArray = [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDialogModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modulArray
  ],
  exports : [
    ...modulArray
  ]
})
export class MaterialModule { }
