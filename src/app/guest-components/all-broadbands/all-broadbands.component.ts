import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CustomerService } from 'src/app/user/user-services/customer/customer.service';
import { GuestService } from 'src/app/user/user-services/guest/guest.service';

@Component({
  selector: 'app-all-broadbands',
  templateUrl: './all-broadbands.component.html',
  styleUrls: ['./all-broadbands.component.scss']
})
export class AllBroadbandsComponent implements OnInit {

  broadBands: any = [];
  validateForm!: FormGroup;
  isSpinning: boolean;

  constructor(private guestService: GuestService,
    private notification: NzNotificationService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.getAllBroadBands();
  }

  getAllBroadBands() {
    this.guestService.getAllBroadBandsForGuest().subscribe((res) => {
      this.broadBands = res.data
      console.log(res);
    });
  }

}
