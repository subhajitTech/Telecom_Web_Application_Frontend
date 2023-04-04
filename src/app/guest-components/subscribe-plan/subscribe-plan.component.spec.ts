import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribePlanComponent } from './subscribe-plan.component';

describe('SubscribePlanComponent', () => {
  let component: SubscribePlanComponent;
  let fixture: ComponentFixture<SubscribePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
