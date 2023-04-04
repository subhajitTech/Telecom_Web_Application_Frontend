import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CustomerService } from '../../user-services/customer/customer.service';

@Component({
  selector: 'app-all-broadbands',
  templateUrl: './all-broadbands.component.html',
  styleUrls: ['./all-broadbands.component.scss']
})
export class AllBroadbandsComponent implements OnInit {

  broadBands: any = [];
  validateForm!: FormGroup;
  isSpinning: boolean;

  constructor(private customerService: CustomerService,
    private notification: NzNotificationService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.getAllBroadBands();
  }

  getAllBroadBands() {
    this.customerService.getAllBroadBands().subscribe((res) => {
      this.broadBands = res.data
      console.log(res);
    });
  }

}
