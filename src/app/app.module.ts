import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BusinessInfoComponent } from './pages/business-info/business-info.component';
import { OwnerDetailsComponent } from './pages/owner-details/owner-details.component';
import { DisclosureVerificationComponent } from './pages/disclosure-verification/disclosure-verification.component';
import { SummaryDetailsComponent } from './pages/summary-details/summary-details.component';
import { FundingDetailsComponent } from './pages/funding-details/funding-details.component';
import { AccountInProgressComponent } from './layout/account-in-progress/account-in-progress.component';

import { BusinessAcctOpenService } from './services/business-acct-open.service';

@NgModule({
  declarations: [
    AppComponent,
    BusinessInfoComponent,
    OwnerDetailsComponent,
    DisclosureVerificationComponent,
    SummaryDetailsComponent,
    FundingDetailsComponent,
    AccountInProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [BusinessAcctOpenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
