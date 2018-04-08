import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialButtonComponent } from './special-button.component';

describe('SpecialButtonComponent', () => {
  let component: SpecialButtonComponent;
  let fixture: ComponentFixture<SpecialButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
