import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloginComponentComponent } from './homelogin-component.component';

describe('HomeloginComponentComponent', () => {
  let component: HomeloginComponentComponent;
  let fixture: ComponentFixture<HomeloginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
