import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexControlsComponent } from './regex-controls.component';

describe('RegexControlsComponent', () => {
  let component: RegexControlsComponent;
  let fixture: ComponentFixture<RegexControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
