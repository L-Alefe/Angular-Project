import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozaikoComponent } from './mozaiko.component';

describe('MozaikoComponent', () => {
  let component: MozaikoComponent;
  let fixture: ComponentFixture<MozaikoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozaikoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozaikoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
