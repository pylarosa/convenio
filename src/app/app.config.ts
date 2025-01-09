import {APP_INITIALIZER, ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Router, withComponentInputBinding, withHashLocation} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: LOCALE_ID, useValue: 'it-IT'},
    provideRouter(routes, withComponentInputBinding(), withHashLocation()),
    provideHttpClient(),
    provideAnimationsAsync(),
    Router
  ]
};
