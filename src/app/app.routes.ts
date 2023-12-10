import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { SeekritComponent } from './seekrit/seekrit.component';
import { ContractsComponent } from './contracts/contracts.component';
import { FormerComponent } from './former/former.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { TeamComponent } from './team/team.component';
import { ProjectsComponent } from './projects/projects.component';
import { CommissionComponent } from './commission/commission.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'former', component: FormerComponent },
  { path: 'hire', component: CommissionComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component: TeamComponent },
  /**
   * Easter eggs :3
   */
  { path: 'seekrit', component: SeekritComponent, pathMatch: 'full' },
  { path: 'seekrit/:slug', component: SeekritComponent },
];
