import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { ContactMeComponent } from './COMPONENTS/contact-me/contact-me.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AudiophileComponent } from './COMPONENTS/projects/audiophile/audiophile.component';
import { EasybankComponent } from './COMPONENTS/projects/easybank/easybank.component';
import { LoopstodioComponent } from './COMPONENTS/projects/loopstodio/loopstodio.component';
import { MovieAppComponent } from './COMPONENTS/projects/movie-app/movie-app.component';
import { ProjectsComponent } from './COMPONENTS/projects/projects.component';

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
