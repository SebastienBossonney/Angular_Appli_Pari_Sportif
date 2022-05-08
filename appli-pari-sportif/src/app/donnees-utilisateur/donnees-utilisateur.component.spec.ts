import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesUtilisateurComponent } from './donnees-utilisateur.component';

describe('DonneesUtilisateurComponent', () => {
  let component: DonneesUtilisateurComponent;
  let fixture: ComponentFixture<DonneesUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
