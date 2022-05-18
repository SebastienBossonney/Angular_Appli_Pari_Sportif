import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherAllUsersComponent } from './afficher-all-users.component';

describe('AfficherAllUsersComponent', () => {
  let component: AfficherAllUsersComponent;
  let fixture: ComponentFixture<AfficherAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficherAllUsersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
