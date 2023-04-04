import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllPlansComponent } from './components/all-plans/all-plans.component';
import { AllBroadbandsComponent } from './components/all-broadbands/all-broadbands.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubscribePlanComponent } from './components/subscribe-plan/subscribe-plan.component';
import { SubscribeBroadbandComponent } from './components/subscribe-broadband/subscribe-broadband.component';
import { MySubscribedBroadbandComponent } from './components/my-subscribed-broadband/my-subscribed-broadband.component';


@NgModule({
  declarations: [
    UserComponent,
    AllPlansComponent,
    AllBroadbandsComponent,
    UpdateProfileComponent,
    DashboardComponent,
    SubscribePlanComponent,
    SubscribeBroadbandComponent,
    MySubscribedBroadbandComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
