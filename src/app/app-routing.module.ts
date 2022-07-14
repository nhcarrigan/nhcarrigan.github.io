import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'mission', component: MissionComponent },
  { path: 'team', component: TeamComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
  // wildcard route for 404 - all routes go above this (:
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
