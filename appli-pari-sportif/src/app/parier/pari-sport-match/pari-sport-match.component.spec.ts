import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PariSportMatchComponent } from './pari-sport-match.component';

describe('PariSportMatchComponent', () => {
  let component: PariSportMatchComponent;
  let fixture: ComponentFixture<PariSportMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PariSportMatchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PariSportMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
