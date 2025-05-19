import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import * as M from 'materialize-css'; // Importação padrão do Materialize

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [], // Componentes standalone não precisam de CommonModule para diretivas básicas
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    // A inicialização do Sidenav é melhor feita em ngAfterViewInit
    // para garantir que os elementos do DOM estejam prontos.
  }

  ngAfterViewInit(): void {
    // Inicializa o Sidenav do Materialize
    // É importante garantir que o Materialize (M) esteja carregado
    // e que os elementos existam no DOM.
    const sidenavElements = this.el.nativeElement.querySelectorAll('.sidenav');
    if (M && M.Sidenav) {
      M.Sidenav.init(sidenavElements, {});
    } else {
      console.error('Materialize Sidenav não pôde ser inicializado. Verifique a importação e ordem dos scripts.');
    }
  }
}
