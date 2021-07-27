import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './COMPONENTS/Shared/nav-bar/nav-bar.component';
import { FooterComponent } from './COMPONENTS/Shared/footer/footer.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { ProjectsComponent } from './COMPONENTS/projects/projects.component';
import { EasybankComponent } from './COMPONENTS/projects/easybank/easybank.component';
import { LoopstodioComponent } from './COMPONENTS/projects/loopstodio/loopstodio.component';
import { AudiophileComponent } from './COMPONENTS/projects/audiophile/audiophile.component';
import { ContactMeComponent } from './COMPONENTS/contact-me/contact-me.component';
import { MovieAppComponent } from './COMPONENTS/projects/movie-app/movie-app.component';

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
