import { Component, OnInit } from '@angular/core';
import { BusinessAcctOpenService } from '../../services/business-acct-open.service';
@Component({
  selector: 'page-disclosure-verification',
  templateUrl: './disclosure-verification.component.html',
  styleUrls: ['./disclosure-verification.component.scss']
})
export class DisclosureVerificationComponent implements OnInit {

  userDocuments: Array<any> = []

  constructor(private acctService: BusinessAcctOpenService) { }

  ngOnInit(): void {
    console.log("Disclosure verification initialization.")
    const ownerData = this.acctService.getClientInfo("owner");

    this.userDocuments = [
      { type: "license", image: ownerData.documents.license },
      { type: "ID Card", image: ownerData.documents.idCard },
    ]


  }

}
