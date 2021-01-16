import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetPlaygroundComponent } from './bet-playground.component';

describe('BetPlaygroundComponent', () => {
  let component: BetPlaygroundComponent;
  let fixture: ComponentFixture<BetPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
