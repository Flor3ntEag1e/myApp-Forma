import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmdpComponent } from './smdp.component';

describe('SmdpComponent', () => {
  let component: SmdpComponent;
  let fixture: ComponentFixture<SmdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
