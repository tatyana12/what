import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate';
/* import { Certificates } from '../list-certificates'; */
import { CertificateService } from '../certificate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[];

  constructor(private certificateService: CertificateService) { }

  ngOnInit() {
    this.getCertificates();
  }

  getCertificates(): void {
    this.certificateService.getCertificates().subscribe(certificates => this.certificates = certificates);
  }

}
