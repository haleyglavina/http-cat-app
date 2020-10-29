import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCodeComponent } from './current-code.component';

describe('CurrentCodeComponent', () => {
  let component: CurrentCodeComponent;
  let fixture: ComponentFixture<CurrentCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
