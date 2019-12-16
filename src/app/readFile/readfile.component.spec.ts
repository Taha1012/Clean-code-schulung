import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfileComponent } from './readfile.component';

describe('ReadfileComponent', () => {
  let component: ReadfileComponent;
  let fixture: ComponentFixture<ReadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
