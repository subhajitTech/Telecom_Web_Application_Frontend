import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBroadbandComponent } from './subscribe-broadband.component';

describe('SubscribeBroadbandComponent', () => {
  let component: SubscribeBroadbandComponent;
  let fixture: ComponentFixture<SubscribeBroadbandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeBroadbandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBroadbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
