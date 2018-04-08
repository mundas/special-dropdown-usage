import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSelectionViewComponent } from './special-selection-view.component';

describe('SpecialSelectionViewComponent', () => {
  let component: SpecialSelectionViewComponent;
  let fixture: ComponentFixture<SpecialSelectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSelectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSelectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
