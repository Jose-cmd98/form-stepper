import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherFormComponent } from './father-form.component';

describe('FatherFormComponent', () => {
  let component: FatherFormComponent;
  let fixture: ComponentFixture<FatherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
