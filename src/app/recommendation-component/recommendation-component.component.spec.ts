import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationComponentComponent } from './recommendation-component.component';

describe('RecommendationComponentComponent', () => {
  let component: RecommendationComponentComponent;
  let fixture: ComponentFixture<RecommendationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
