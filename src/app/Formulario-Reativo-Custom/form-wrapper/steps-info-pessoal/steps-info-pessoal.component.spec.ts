import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsInfoPessoalComponent } from './steps-info-pessoal.component';

describe('StepsInfoPessoalComponent', () => {
  let component: StepsInfoPessoalComponent;
  let fixture: ComponentFixture<StepsInfoPessoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsInfoPessoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsInfoPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
