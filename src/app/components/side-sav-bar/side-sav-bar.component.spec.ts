import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSavBarComponent } from './side-sav-bar.component';

describe('SideSavBarComponent', () => {
  let component: SideSavBarComponent;
  let fixture: ComponentFixture<SideSavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
