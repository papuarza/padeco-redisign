import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManomanoComponent } from './manomano.component';

describe('ManomanoComponent', () => {
  let component: ManomanoComponent;
  let fixture: ComponentFixture<ManomanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManomanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
