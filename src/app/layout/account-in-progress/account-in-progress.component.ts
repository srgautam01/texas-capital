import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account-in-progress',
  templateUrl: './account-in-progress.component.html',
  styleUrls: ['./account-in-progress.component.scss']
})
export class AccountInProgressComponent implements OnInit {

  title: string = 'Texas Capital';

  constructor() { }

  ngOnInit(): void {
  }

}
