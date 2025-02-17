import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, withHashLocation } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),// ✅ Habilita `fetch` en HttpClient
    provideRouter(routes, withHashLocation())
  ]
}).catch(err => console.error(err));
