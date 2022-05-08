import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesPariComponent } from './donnees-pari.component';

describe('DonneesPariComponent', () => {
  let component: DonneesPariComponent;
  let fixture: ComponentFixture<DonneesPariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesPariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesPariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
