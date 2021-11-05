import { Component, OnInit } from '@angular/core';
import { BusinessAcctOpenService } from '../../services/business-acct-open.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-disclosure-verification',
  templateUrl: './disclosure-verification.component.html',
  styleUrls: ['./disclosure-verification.component.scss']
})
export class DisclosureVerificationComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  userDocuments: Array<any> = []

  constructor(private acctService: BusinessAcctOpenService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log("Disclosure verification initialization.")
    const ownerData = this.acctService.getClientInfo("owner");

    this.userDocuments = [
      { type: "license", image: ownerData.documents.license },
      { type: "ID Card", image: ownerData.documents.idCard },
    ]


  }

}
