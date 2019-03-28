import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadComponent } from './oportunidad.component';

describe('OportunidadComponent', () => {
  let component: OportunidadComponent;
  let fixture: ComponentFixture<OportunidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OportunidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
