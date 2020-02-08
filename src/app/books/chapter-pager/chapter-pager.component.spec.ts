import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterPagerComponent } from './chapter-pager.component';

describe('ChapterPagerComponent', () => {
  let component: ChapterPagerComponent;
  let fixture: ComponentFixture<ChapterPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
