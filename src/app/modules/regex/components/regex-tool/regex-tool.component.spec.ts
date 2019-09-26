import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexToolComponent } from './regex-tool.component';

describe('RegexToolComponent', () => {
  let component: RegexToolComponent;
  let fixture: ComponentFixture<RegexToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
