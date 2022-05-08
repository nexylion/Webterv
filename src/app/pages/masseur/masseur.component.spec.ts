import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasseurComponent } from './masseur.component';

describe('MasseurComponent', () => {
  let component: MasseurComponent;
  let fixture: ComponentFixture<MasseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
