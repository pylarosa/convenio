import {Routes} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {AboutComponent} from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent, title: 'Convenio Home' },
      {path: 'about', component: AboutComponent, title: 'Chi siamo'}
    ],
  },
  { path: '**', redirectTo: 'homepage' },
];
