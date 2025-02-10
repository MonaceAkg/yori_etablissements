import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChoixComponent } from './main-choix.component';

describe('MainChoixComponent', () => {
  let component: MainChoixComponent;
  let fixture: ComponentFixture<MainChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChoixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
