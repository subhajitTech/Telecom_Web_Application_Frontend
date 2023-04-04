import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/guards/noAuth/no-auth.guard';
import { AllBroadbandsComponent } from './guest-components/all-broadbands/all-broadbands.component';
import { AllPlansComponent } from './guest-components/all-plans/all-plans.component';
import { SubscribeBroadbandComponent } from './guest-components/subscribe-broadband/subscribe-broadband.component';
import { SubscribePlanComponent } from './guest-components/subscribe-plan/subscribe-plan.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  { path: 'plans', component: AllPlansComponent, canActivate: [NoAuthGuard] },
  { path: 'subscribe_plan/:planId', component: SubscribePlanComponent, canActivate: [NoAuthGuard] },
  { path: 'subscribe_broadband/:broadbandId', component: SubscribeBroadbandComponent, canActivate: [NoAuthGuard] },
  { path: 'broadbands', component: AllBroadbandsComponent, canActivate: [NoAuthGuard] },
  { path: 'register', component: SignupComponent, canActivate: [NoAuthGuard] },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
