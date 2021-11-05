import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessAcctOpenService } from '../../services/business-acct-open.service';

@Component({
  selector: 'page-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {
  // TODO: remove any
  userData: any = {
    firstName: "Max",
    lastName: "Smith",
    emailAddress: "maxdemo@gmail.com",
    address: {
      line1: null,
      line2: null,
      zip: null,
      state: null,
      city: null,
    },
    inputAddress: "123Address101",
    inputAddress2: "456Address102",
    inputCity: "Dallas",
    inputState: "",
    inputZip: "",
    documents: {
      license: null,
      idCard: null,
    }
  };

  constructor(private router: Router, private acctService: BusinessAcctOpenService) { }

  ngOnInit(): void {
  }

  // TODO: remove any
  onFileChange(e: any, fileType: string): void {
    console.log("Document changed for type", fileType, e)
    const uploadedFiles: Array<any> = e.target.files;

    if (uploadedFiles.length == 0) {
      console.log("Uploaded file cleared.")

      this.userData.documents[fileType] = null;
    } else if (uploadedFiles.length == 1) {
      console.log("processing file", uploadedFiles[0])

      const reader = new FileReader();
      reader.readAsDataURL(uploadedFiles[0]);
      reader.onload = (_event) => {
        this.userData.documents[fileType] = reader.result;
      }
    } else {
      console.error("User uploaded multiple files!!!")
    }
  }

  onSubmit(): void {
    console.log("Form submitted.")
    console.log(this.userData);

    this.acctService.setClientInfo(this.userData, "owner")

    this.router.navigate(['page3']);
  }
}
