import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameOrdersComponent } from './boardgame-orders.component';

describe('BoardgameOrdersComponent', () => {
  let component: BoardgameOrdersComponent;
  let fixture: ComponentFixture<BoardgameOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardgameOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
