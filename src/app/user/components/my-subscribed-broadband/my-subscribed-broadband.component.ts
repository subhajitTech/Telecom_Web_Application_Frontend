import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CustomerService } from '../../user-services/customer/customer.service';

@Component({
  selector: 'app-my-subscribed-broadband',
  templateUrl: './my-subscribed-broadband.component.html',
  styleUrls: ['./my-subscribed-broadband.component.scss']
})
export class MySubscribedBroadbandComponent implements OnInit {

  subscribedBroadbands: any = [];
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
    this.customerService.getAllSubscribedBroadBand().subscribe((res) => {
      this.subscribedBroadbands = res.data;
      console.log(res);
    });
  }

}
