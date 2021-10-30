import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInProgressComponent } from './account-in-progress.component';

describe('AccountInProgressComponent', () => {
  let component: AccountInProgressComponent;
  let fixture: ComponentFixture<AccountInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
