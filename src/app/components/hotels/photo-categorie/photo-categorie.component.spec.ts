import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCategorieComponent } from './photo-categorie.component';

describe('PhotoCategorieComponent', () => {
  let component: PhotoCategorieComponent;
  let fixture: ComponentFixture<PhotoCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
