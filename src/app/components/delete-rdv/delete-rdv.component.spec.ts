import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRdvComponent } from './delete-rdv.component';

describe('DeleteRdvComponent', () => {
  let component: DeleteRdvComponent;
  let fixture: ComponentFixture<DeleteRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
