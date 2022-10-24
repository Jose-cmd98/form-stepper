import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkCustomStepperComponent } from './cdk-custom-stepper.component';

describe('CdkCustomStepperComponent', () => {
  let component: CdkCustomStepperComponent;
  let fixture: ComponentFixture<CdkCustomStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkCustomStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkCustomStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
