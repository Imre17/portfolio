import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EasybankComponent } from './components/projects/easybank/easybank.component';
import { LoopstodioComponent } from './components/projects/loopstodio/loopstodio.component';
import { AudiophileComponent } from './components/projects/audiophile/audiophile.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MovieAppComponent } from './components/projects/movie-app/movie-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    EasybankComponent,
    LoopstodioComponent,
    AudiophileComponent,
    ContactMeComponent,
    MovieAppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
