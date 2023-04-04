import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBroadbandsComponent } from './all-broadbands.component';

describe('AllBroadbandsComponent', () => {
  let component: AllBroadbandsComponent;
  let fixture: ComponentFixture<AllBroadbandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBroadbandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBroadbandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
