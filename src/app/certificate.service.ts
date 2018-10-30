import { Injectable } from '@angular/core';
import { Certificate } from './certificate';
import { Certificates } from './list-certificates';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor(private messageService: MessageService) { }

  getCertificates(): Observable<Certificate[]> {
    this.messageService.add('Workshops/seminars: workshops/seminars fetched');
    return of(Certificates);
  }

  getCertificate(id: number): Observable<Certificate> {
    this.messageService.add(`Workshop/Seminar: workshop/seminar id=${id} fetched`);
    return of(Certificates.find(certificate => certificate.id === id));
  }
}
