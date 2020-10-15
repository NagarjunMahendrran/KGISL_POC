import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmodelComponent } from './searchmodel.component';

describe('SearchmodelComponent', () => {
  let component: SearchmodelComponent;
  let fixture: ComponentFixture<SearchmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
