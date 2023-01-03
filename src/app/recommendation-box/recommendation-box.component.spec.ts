import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationBoxComponent } from './recommendation-box.component';

describe('RecommendationBoxComponent', () => {
  let component: RecommendationBoxComponent;
  let fixture: ComponentFixture<RecommendationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
