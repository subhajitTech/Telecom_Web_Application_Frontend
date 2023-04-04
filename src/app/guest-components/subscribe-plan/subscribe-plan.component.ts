import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GuestService } from 'src/app/user/user-services/guest/guest.service';

@Component({
  selector: 'app-subscribe-plan',
  templateUrl: './subscribe-plan.component.html',
  styleUrls: ['./subscribe-plan.component.scss']
})
export class SubscribePlanComponent implements OnInit {

  planId: any = this.activatedroute.snapshot.params['planId'];
  isSpinning = false;
  validateForm!: FormGroup;
  plan: any;
  expireAt: Date;
  date: Date;

  constructor(private fb: FormBuilder,
    private notification: NzNotificationService,
    private router: Router,
    private guestService: GuestService,
    private activatedroute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phoneNumber: [null, [Validators.required]],
    });
    this.getPlanById();
  }

  getPlanById() {
    this.guestService.getPlanById(this.planId).subscribe((res) => {
      this.plan = res.data;
      console.log(res);
      console.log(res.data.duration)
      this.date = new Date();
      this.date.setDate(this.date.getDate() + res.data.duration);
      console.log(this.date);
    });
  }

  submitForm(subscribePlanDto: any): void {
    console.log(this.validateForm.valid);
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      console.log("In function");
      this.isSpinning = true;
      subscribePlanDto.expireAt = this.date;
      this.guestService.subscribePlan(this.planId, this.validateForm.value).subscribe((res) => {
        this.isSpinning = false;
        console.log(res)
        if (res.status == "CREATED") {
          this.notification
            .success(
              'SUCCESS',
              `Plan Subscribed Successfully!!!`,
              { nzDuration: 5000 }
            );
        } else {
          this.notification
            .error(
              'ERROR',
              `${res.message}`,
              { nzDuration: 5000 }
            )
        }
      });
    } else {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
