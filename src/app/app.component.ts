// src/app/app.component.ts
import { Component } from '@angular/core';
import { LoginRegisterComponent } from './login-register/login-register.component'; // VERIFIQUE ESTE CAMINHO

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginRegisterComponent // Certifique-se que está aqui
    // RouterOutlet, se estiver usando rotas
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuaApp';
}