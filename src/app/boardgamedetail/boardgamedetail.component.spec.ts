import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamedetailComponent } from './boardgamedetail.component';

describe('BoardgamedetailComponent', () => {
  let component: BoardgamedetailComponent;
  let fixture: ComponentFixture<BoardgamedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgamedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
