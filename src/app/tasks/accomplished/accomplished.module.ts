import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccomplishedPageRoutingModule } from './accomplished-routing.module';

import { AccomplishedPage } from './accomplished.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccomplishedPageRoutingModule
  ],
  declarations: [AccomplishedPage]
})
export class AccomplishedPageModule {}
