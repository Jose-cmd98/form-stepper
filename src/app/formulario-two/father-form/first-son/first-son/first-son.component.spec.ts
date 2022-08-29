import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSonComponent } from './first-son.component';

describe('FirstSonComponent', () => {
  let component: FirstSonComponent;
  let fixture: ComponentFixture<FirstSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
