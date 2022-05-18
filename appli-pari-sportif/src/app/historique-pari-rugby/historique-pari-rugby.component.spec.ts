import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePariRugbyComponent } from './historique-pari-rugby.component';

describe('HistoriquePariRugbyComponent', () => {
  let component: HistoriquePariRugbyComponent;
  let fixture: ComponentFixture<HistoriquePariRugbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoriquePariRugbyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePariRugbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
