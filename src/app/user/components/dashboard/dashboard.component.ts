import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CustomerService } from '../../user-services/customer/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  subscribedPlans: any = [];
  validateForm!: FormGroup;
  isSpinning: boolean;

  constructor(private customerService: CustomerService,
    private notification: NzNotificationService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.getAllSubscribedPlans();
  }

  getAllSubscribedPlans() {
    this.customerService.getAllSubscribedPlans().subscribe((res) => {
      this.subscribedPlans = res.data;
      console.log(res);
    });
  }

}
