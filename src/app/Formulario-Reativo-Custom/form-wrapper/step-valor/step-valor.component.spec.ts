import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepValorComponent } from './step-valor.component';

describe('StepValorComponent', () => {
  let component: StepValorComponent;
  let fixture: ComponentFixture<StepValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepValorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
