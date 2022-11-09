import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPagamentoComponent } from './step-pagamento.component';

describe('StepPagamentoComponent', () => {
  let component: StepPagamentoComponent;
  let fixture: ComponentFixture<StepPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepPagamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
