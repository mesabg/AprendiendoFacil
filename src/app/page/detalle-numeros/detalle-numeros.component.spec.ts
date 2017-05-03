import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNumerosComponent } from './detalle-numeros.component';

describe('DetalleNumerosComponent', () => {
  let component: DetalleNumerosComponent;
  let fixture: ComponentFixture<DetalleNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
