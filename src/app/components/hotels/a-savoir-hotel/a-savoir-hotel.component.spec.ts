import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASavoirHotelComponent } from './a-savoir-hotel.component';

describe('ASavoirHotelComponent', () => {
  let component: ASavoirHotelComponent;
  let fixture: ComponentFixture<ASavoirHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASavoirHotelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASavoirHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
