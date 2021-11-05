import { BusinessAcctOpenService } from './../../services/business-acct-open.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent implements OnInit {

  userData = {
    businessType: "",
    natureOfBusiness: "commercial",
    doingBusinessAs: "production",
    tinType: "",
    naicsType: "",
    businessLegalName: "texascapital",
    dateOfEstablishment: "",
    taxIdentificationNumber: ""
  };

  constructor(private router: Router, private acctService: BusinessAcctOpenService) { }

  ngOnInit(): void {
    console.log("initializing business info component")
  }

  onSubmit() {
    console.log("form submitted");
    console.log(this.userData);

    this.acctService.setClientInfo(this.userData, "business");

    this.router.navigate(['page2']);
  }
}
