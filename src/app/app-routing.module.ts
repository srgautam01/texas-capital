import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BusinessInfoComponent } from './pages/business-info/business-info.component';
import { DisclosureVerificationComponent } from './pages/disclosure-verification/disclosure-verification.component';
import { FundingDetailsComponent } from './pages/funding-details/funding-details.component';
import { OwnerDetailsComponent } from './pages/owner-details/owner-details.component';
import { SummaryDetailsComponent } from './pages/summary-details/summary-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: "full" },
  { path: 'page1', component: BusinessInfoComponent },
  { path: 'page2', component: OwnerDetailsComponent },
  { path: 'page3', component: DisclosureVerificationComponent },
  { path: 'page4', component: FundingDetailsComponent },
  { path: 'page5', component: SummaryDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
