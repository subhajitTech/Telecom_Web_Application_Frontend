import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySubscribedBroadbandComponent } from './my-subscribed-broadband.component';

describe('MySubscribedBroadbandComponent', () => {
  let component: MySubscribedBroadbandComponent;
  let fixture: ComponentFixture<MySubscribedBroadbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySubscribedBroadbandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubscribedBroadbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
