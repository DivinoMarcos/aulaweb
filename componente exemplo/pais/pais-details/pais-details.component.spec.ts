import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetailsComponent } from './pais-details.component';

describe('PaisDetailsComponent', () => {
  let component: PaisDetailsComponent;
  let fixture: ComponentFixture<PaisDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
