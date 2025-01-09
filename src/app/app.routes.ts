import {Routes} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {MainContainerComponent} from './main-container/main-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent, // Main container for the app
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' }, // Default route
      { path: 'homepage', component: HomepageComponent, title: 'Convenio Home' }, // Homepage
    ],
  },
  { path: '**', redirectTo: 'homepage' }, // Wildcard redirect
];
