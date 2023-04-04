import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GuestService } from 'src/app/user/user-services/guest/guest.service';

@Component({
  selector: 'app-all-plans',
  templateUrl: './all-plans.component.html',
  styleUrls: ['./all-plans.component.scss']
})
export class AllPlansComponent implements OnInit {

  plans: any = [];
  validateForm!: FormGroup;
  isSpinning: boolean;

  constructor(private guestService: GuestService,
    private notification: NzNotificationService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.getAllPlans();
  }

  getAllPlans() {
    this.guestService.getAllPlansForGuest().subscribe((res) => {
      this.plans = res.data;
      console.log(res);
    });
  }

}
