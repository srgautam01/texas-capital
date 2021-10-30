import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessInfoComponent } from './pages/business-info/business-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnerDetailsComponent } from './pages/owner-details/owner-details.component';
import { DisclosureVerificationComponent } from './pages/disclosure-verification/disclosure-verification.component';
import { SummaryDetailsComponent } from './pages/summary-details/summary-details.component';
import { FundingDetailsComponent } from './pages/funding-details/funding-details.component';
import { AccountInProgressComponent } from './layout/account-in-progress/account-in-progress.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
