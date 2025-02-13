import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImportantesComponent } from './info-importantes.component';

describe('InfoImportantesComponent', () => {
  let component: InfoImportantesComponent;
  let fixture: ComponentFixture<InfoImportantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoImportantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoImportantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
