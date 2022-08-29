import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSonComponent } from './second-son.component';

describe('SecondSonComponent', () => {
  let component: SecondSonComponent;
  let fixture: ComponentFixture<SecondSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
