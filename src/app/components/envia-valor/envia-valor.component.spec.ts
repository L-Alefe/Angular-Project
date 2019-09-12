import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviaValorComponent } from './envia-valor.component';

describe('EnviaValorComponent', () => {
  let component: EnviaValorComponent;
  let fixture: ComponentFixture<EnviaValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviaValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviaValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
