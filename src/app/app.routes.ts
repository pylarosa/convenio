import {Routes} from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {MainContainerComponent} from './main-container/main-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageComponent, title: 'Convenio Home' },
    ],
  },
  { path: '**', redirectTo: 'homepage' },
];
