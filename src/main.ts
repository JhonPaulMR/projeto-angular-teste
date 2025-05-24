import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Verifique este caminho
// Se você tem rotas, pode ter importações como provideRouter e appRoutes

bootstrapApplication(AppComponent, {
  providers: [
    // Ex: provideRouter(appRoutes) se você tiver rotas
  ]
})
  .catch(err => console.error(err));