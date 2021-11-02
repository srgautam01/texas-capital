import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent implements OnInit {

  userData = {
    firstName: "Sundar",
    lastName: "Gautam",
    emailAddress: "sundardemo@gmail.com",
    inputAddress: "123Address101",
    inputAddress2: "456Address102",
    inputCity: "Dallas",
    inputState: "",
    inputZip: "",
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("Form submitted.")
    console.log(this.userData);

    this.router.navigate(['page3']);
  }
}
