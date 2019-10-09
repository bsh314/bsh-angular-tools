import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegexOptionsComponent } from './regex-options.component';

describe('RegexOptionsComponent', () => {
  let component: RegexOptionsComponent;
  let fixture: ComponentFixture<RegexOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegexOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegexOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
