import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AllBroadbandsComponent } from './components/all-broadbands/all-broadbands.component';
import { AllPlansComponent } from './components/all-plans/all-plans.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MySubscribedBroadbandComponent } from './components/my-subscribed-broadband/my-subscribed-broadband.component';
import { SubscribeBroadbandComponent } from './components/subscribe-broadband/subscribe-broadband.component';
import { SubscribePlanComponent } from './components/subscribe-plan/subscribe-plan.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'subscribe_plan/:planId', component: SubscribePlanComponent, canActivate: [AuthGuard] },
  { path: 'subscribe_broadband/:broadbandId', component: SubscribeBroadbandComponent, canActivate: [AuthGuard] },
  { path: 'plans', component: AllPlansComponent, canActivate: [AuthGuard] },
  { path: 'broadbands', component: AllBroadbandsComponent, canActivate: [AuthGuard] },
  { path: 'update_profile', component: UpdateProfileComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'my_broadbands', component: MySubscribedBroadbandComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
