import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessAcctOpenService {

  // TODO: fix any
  clientInfo: any = {
    owner: {
      documents: {
        license: null,
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
