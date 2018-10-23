import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatesComponent } from './certificates/certificates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertificateDetailComponent } from './certificate-detail/certificate-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: CertificateDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'certificates', component: CertificatesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
