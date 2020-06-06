import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarolloWebComponent } from './desarollo-web.component';

describe('DesarolloWebComponent', () => {
  let component: DesarolloWebComponent;
  let fixture: ComponentFixture<DesarolloWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarolloWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarolloWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
