import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationInformationComponent } from './modification-information.component';

describe('ModificationInformationComponent', () => {
  let component: ModificationInformationComponent;
  let fixture: ComponentFixture<ModificationInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
