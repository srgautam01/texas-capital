import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessAcctOpenService {

  // TODO: fix any
  clientInfo: any = {
    owner: {
      documents: {
        license: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17cf082e028%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17cf082e028%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
        idCard: "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
      }
    },
    business: {
      anotherData: "random business data"
    },
  }

  constructor() {
    console.log("Business Account service running...")
  }

  setClientInfo(data: any, key: string): void {
    console.log("Setting client info", key, data, this.clientInfo)
    this.clientInfo[key] = data;
  }

  getClientInfo(key: string): any {
    console.log("Getting client info", key, this.clientInfo)
    return this.clientInfo[key];
  }


  // right pattern: Observable based 
}
