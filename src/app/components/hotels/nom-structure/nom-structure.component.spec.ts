import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomStructureComponent } from './nom-structure.component';

describe('NomStructureComponent', () => {
  let component: NomStructureComponent;
  let fixture: ComponentFixture<NomStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
