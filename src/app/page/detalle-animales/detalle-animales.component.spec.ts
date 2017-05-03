import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAnimalesComponent } from './detalle-animales.component';

describe('DetalleAnimalesComponent', () => {
  let component: DetalleAnimalesComponent;
  let fixture: ComponentFixture<DetalleAnimalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAnimalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
