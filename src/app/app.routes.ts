import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }, // Match the entire path
  { path: 'homepage', component: HomepageComponent, title: 'Homepage' },
  { path: '**', redirectTo: 'homepage' }, // Fallback to the homepage
];
