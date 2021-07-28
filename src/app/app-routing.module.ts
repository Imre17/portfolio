import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';
import { AudiophileComponent } from './components/projects/audiophile/audiophile.component';
import { EasybankComponent } from './components/projects/easybank/easybank.component';
import { LoopstodioComponent } from './components/projects/loopstodio/loopstodio.component';
import { MovieAppComponent } from './components/projects/movie-app/movie-app.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent },

  { path: 'projects/easybank', component: EasybankComponent },
  { path: 'projects/loopstudio', component: LoopstodioComponent },
  { path: 'projects/audiophile', component: AudiophileComponent },
  { path: 'projects/movie-app', component: MovieAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
