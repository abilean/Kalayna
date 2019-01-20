import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ABookComponent } from './a-book.component';

describe('ABookComponent', () => {
  let component: ABookComponent;
  let fixture: ComponentFixture<ABookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ABookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
