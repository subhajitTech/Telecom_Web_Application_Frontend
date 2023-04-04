import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CustomerService } from '../../user-services/customer/customer.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  isSpinning = false;
  user: any; validateForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private customerService: CustomerService,
    private notification: NzNotificationService,
    private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
    });
    this.getProfileByUserId();
  }

  getProfileByUserId() {
    this.customerService.getProfileByUserId().subscribe((res) => {
      console.log(res);
      const userDto = res.data;
      this.validateForm.patchValue(userDto);
    });
  }

  submitForm(): void {
    console.log(this.validateForm.valid);
    console.log(this.validateForm);
    if (this.validateForm.valid) {
      console.log("In function");
      this.isSpinning = true;
      this.customerService.updateCustomerProfile(this.validateForm.value).subscribe((res) => {
        this.isSpinning = false;
        if (res.status = "OK") {
          this.notification
            .success(
              'SUCCESS',
              `Profile Updated Successfully!`,
              { nzDuration: 5000 }
            );
          this.router.navigateByUrl('/user/dashboard');
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
