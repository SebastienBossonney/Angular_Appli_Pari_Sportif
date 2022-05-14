import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PariSportComponent } from './pari-sport.component';

describe('PariSportComponent', () => {
  let component: PariSportComponent;
  let fixture: ComponentFixture<PariSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PariSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PariSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
