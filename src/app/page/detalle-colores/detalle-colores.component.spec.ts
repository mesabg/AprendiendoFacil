import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleColoresComponent } from './detalle-colores.component';

describe('DetalleColoresComponent', () => {
  let component: DetalleColoresComponent;
  let fixture: ComponentFixture<DetalleColoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleColoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleColoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
