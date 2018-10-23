import { Component, OnInit, Input } from '@angular/core';
import { Certificate } from '../certificate';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CertificateService }  from '../certificate.service';

@Component({
  selector: 'app-certificate-detail',
  templateUrl: './certificate-detail.component.html',
  styleUrls: ['./certificate-detail.component.css']
})
export class CertificateDetailComponent implements OnInit {
  @Input() certificate: Certificate;
  
  constructor(
    private route: ActivatedRoute,
    private certificateService: CertificateService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCertificate();
  }

  getCertificate(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.certificateService.getCertificate(id).subscribe(certificate => this.certificate = certificate);
  }

  goBack(): void {
    this.location.back();
  }

  setColor() {
    return this.certificate.room > 12 ? 'orange' : 'lightgreen';
  }
}
