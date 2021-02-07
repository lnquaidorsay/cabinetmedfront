import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncomptaComponent } from './gestioncompta.component';

describe('GestioncomptaComponent', () => {
  let component: GestioncomptaComponent;
  let fixture: ComponentFixture<GestioncomptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncomptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncomptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
