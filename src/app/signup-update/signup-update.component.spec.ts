import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUpdateComponent } from './signup-update.component';

describe('SignupUpdateComponent', () => {
  let component: SignupUpdateComponent;
  let fixture: ComponentFixture<SignupUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
