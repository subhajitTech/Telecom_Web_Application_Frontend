import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GuestService } from 'src/app/user/user-services/guest/guest.service';

@Component({
  selector: 'app-subscribe-broadband',
  templateUrl: './subscribe-broadband.component.html',
  styleUrls: ['./subscribe-broadband.component.scss']
})
export class SubscribeBroadbandComponent implements OnInit {

  broadbandId: any = this.activatedroute.snapshot.params['broadbandId'];
  isSpinning = false;
  validateForm!: FormGroup;
  broadband: any;
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
    this.getBroadBandById();
  }

  getBroadBandById() {
    this.guestService.getBroadBandById(this.broadbandId).subscribe((res) => {
      this.broadband = res.data;
      console.log(res);
      console.log(res.data.duration)
      this.date = new Date();
      this.date.setDate(this.date.getDate() + res.data.duration);
      console.log(this.date);
    });
  }

  submitForm(subscribeBroadbandDto: any): void {
    console.log(this.validateForm.valid);
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      console.log("In function");
      this.isSpinning = true;
      subscribeBroadbandDto.expireAt = this.date;
      this.guestService.subscribeBroadband(this.broadbandId, this.validateForm.value).subscribe((res) => {
        this.isSpinning = false;
        console.log(res)
        if (res.status == "CREATED") {
          this.notification
            .success(
              'SUCCESS',
              `Broadband Subscribed Successfully!!!`,
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
