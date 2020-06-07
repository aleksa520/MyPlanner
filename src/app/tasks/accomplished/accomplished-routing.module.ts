import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomplishedPage } from './accomplished.page';

const routes: Routes = [
  {
    path: '',
    component: AccomplishedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccomplishedPageRoutingModule {}
