import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunStuffComponent } from './fun-stuff.component';

describe('FunStuffComponent', () => {
  let component: FunStuffComponent;
  let fixture: ComponentFixture<FunStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
