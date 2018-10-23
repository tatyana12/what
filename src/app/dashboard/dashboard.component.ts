import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate';
import { CertificateService } from '../certificate.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  certificates: Certificate[] = [];
 
  constructor(private certificateService: CertificateService) { }
 
  ngOnInit() {
    this.getCertificates();
  }
 
  getCertificates(): void {
    this.certificateService.getCertificates().subscribe(certificates => this.certificates = certificates);
  }
}