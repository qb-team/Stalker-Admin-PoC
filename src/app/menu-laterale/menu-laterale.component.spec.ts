import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateraleComponent } from './menu-laterale.component';

describe('MenuLateraleComponent', () => {
  let component: MenuLateraleComponent;
  let fixture: ComponentFixture<MenuLateraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLateraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
