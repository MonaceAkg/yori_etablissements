import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASavoirComponent } from './a-savoir.component';

describe('ASavoirComponent', () => {
  let component: ASavoirComponent;
  let fixture: ComponentFixture<ASavoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ASavoirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
