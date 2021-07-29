import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';
import { AudiophileComponent } from './components/projects/audiophile/audiophile.component';
import { EasybankComponent } from './components/projects/easybank/easybank.component';
import { LoopstodioComponent } from './components/projects/loopstodio/loopstodio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WeatherComponent } from './components/projects/weather/weather.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'thank-you', component: ThankYouComponent },

  { path: 'projects/easybank', component: EasybankComponent },
  { path: 'projects/loopstudio', component: LoopstodioComponent },
  { path: 'projects/audiophile', component: AudiophileComponent },
  { path: 'projects/weather', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
