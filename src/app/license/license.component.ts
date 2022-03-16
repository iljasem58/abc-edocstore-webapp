import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css', '../app.component.css'],
})
export class LicenseComponent implements OnInit {
  showAppId: boolean = false;
  showLicenseStatus: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onShowAppIdClick() {
    this.showAppId = !this.showAppId;
  }

  onShowLicenseStatusClick() {
    this.showLicenseStatus = !this.showLicenseStatus;
  }
}
