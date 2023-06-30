import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PastComponent } from './past/past.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    DonateComponent,
    FourOhFourComponent,
    PastComponent,
    ProjectsComponent,
    ShowcaseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProjectsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
