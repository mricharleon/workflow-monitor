import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DashboardRoutingModule,
    StatModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
