import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import {MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CartModule { }
