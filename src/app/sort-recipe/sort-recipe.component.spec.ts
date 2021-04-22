import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortRecipeComponent } from './sort-recipe.component';

describe('SortRecipeComponent', () => {
  let component: SortRecipeComponent;
  let fixture: ComponentFixture<SortRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
