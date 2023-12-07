import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { SeekritComponent } from './seekrit/seekrit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'seekrit', component: SeekritComponent, pathMatch: 'full' },
  { path: 'seekrit/:slug', component: SeekritComponent },
];
