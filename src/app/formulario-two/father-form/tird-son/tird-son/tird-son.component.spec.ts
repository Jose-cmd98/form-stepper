import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TirdSonComponent } from './tird-son.component';

describe('TirdSonComponent', () => {
  let component: TirdSonComponent;
  let fixture: ComponentFixture<TirdSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TirdSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TirdSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
