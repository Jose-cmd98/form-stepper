import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCdkComponent } from './formulario-cdk.component';

describe('FormularioCdkComponent', () => {
  let component: FormularioCdkComponent;
  let fixture: ComponentFixture<FormularioCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
