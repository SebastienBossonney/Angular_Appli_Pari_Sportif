import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePariFootComponent } from './historique-pari-foot.component';

describe('HistoriquePariFootComponent', () => {
  let component: HistoriquePariFootComponent;
  let fixture: ComponentFixture<HistoriquePariFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquePariFootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePariFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
