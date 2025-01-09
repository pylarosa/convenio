import {Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: NavbarComponent, title: 'Homepage' },
  { path: '**', redirectTo: 'homepage' }
];
