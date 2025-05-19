import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Importa o HeaderComponent
import { FooterComponent } from './footer/footer.component'; // Importa o FooterComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, // Adiciona HeaderComponent aos imports
    FooterComponent  // Adiciona FooterComponent aos imports
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PixelCart Emulator'; // Título da aplicação
}
