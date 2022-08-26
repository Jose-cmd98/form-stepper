import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTwoComponent } from './formulario-two.component';

describe('FormularioTwoComponent', () => {
  let component: FormularioTwoComponent;
  let fixture: ComponentFixture<FormularioTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
