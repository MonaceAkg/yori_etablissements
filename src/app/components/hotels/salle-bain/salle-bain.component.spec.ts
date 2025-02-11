import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleBainComponent } from './salle-bain.component';

describe('SalleBainComponent', () => {
  let component: SalleBainComponent;
  let fixture: ComponentFixture<SalleBainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalleBainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleBainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
