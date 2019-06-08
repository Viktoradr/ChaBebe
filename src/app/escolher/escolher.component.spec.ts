import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherComponent } from './escolher.component';

describe('EscolherComponent', () => {
  let component: EscolherComponent;
  let fixture: ComponentFixture<EscolherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
