import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPersonajeComponent } from './detalles-personaje.component';

describe('DetallesPersonajeComponent', () => {
  let component: DetallesPersonajeComponent;
  let fixture: ComponentFixture<DetallesPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
