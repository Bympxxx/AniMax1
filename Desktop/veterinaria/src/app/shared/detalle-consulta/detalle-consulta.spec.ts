import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleConsulta } from './detalle-consulta';

describe('DetalleConsulta', () => {
  let component: DetalleConsulta;
  let fixture: ComponentFixture<DetalleConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleConsulta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleConsulta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
