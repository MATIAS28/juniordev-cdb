import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarolloWebJuniorComponent } from './desarollo-web-junior.component';

describe('DesarolloWebJuniorComponent', () => {
  let component: DesarolloWebJuniorComponent;
  let fixture: ComponentFixture<DesarolloWebJuniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarolloWebJuniorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarolloWebJuniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
