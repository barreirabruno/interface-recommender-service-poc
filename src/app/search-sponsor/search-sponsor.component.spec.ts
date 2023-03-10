import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSponsorComponent } from './search-sponsor.component';

describe('SearchSponsorComponent', () => {
  let component: SearchSponsorComponent;
  let fixture: ComponentFixture<SearchSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSponsorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
