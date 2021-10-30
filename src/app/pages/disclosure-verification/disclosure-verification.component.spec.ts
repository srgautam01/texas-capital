import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclosureVerificationComponent } from './disclosure-verification.component';

describe('DisclosureVerificationComponent', () => {
  let component: DisclosureVerificationComponent;
  let fixture: ComponentFixture<DisclosureVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisclosureVerificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclosureVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
