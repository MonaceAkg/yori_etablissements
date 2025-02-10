import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEspaceComponent } from './main-espace.component';

describe('MainEspaceComponent', () => {
  let component: MainEspaceComponent;
  let fixture: ComponentFixture<MainEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainEspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
