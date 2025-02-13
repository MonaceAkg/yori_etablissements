import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComplementairesComponent } from './info-complementaires.component';

describe('InfoComplementairesComponent', () => {
  let component: InfoComplementairesComponent;
  let fixture: ComponentFixture<InfoComplementairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoComplementairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoComplementairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
