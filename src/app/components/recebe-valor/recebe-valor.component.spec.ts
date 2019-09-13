import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebeValorComponent } from './recebe-valor.component';

describe('RecebeValorComponent', () => {
  let component: RecebeValorComponent;
  let fixture: ComponentFixture<RecebeValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebeValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebeValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
