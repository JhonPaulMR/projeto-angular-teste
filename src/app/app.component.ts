import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionarPessoaFormComponent } from './adicionar-pessoa-form/adicionar-pessoa-form.component'; // Importe o componente
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component'; // Importe o componente
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // Adicione os componentes importados e CommonModule ao array 'imports'
  imports: [AdicionarPessoaFormComponent, ListaPessoasComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'gerenciador-contatos';
  listaDePessoas: string[] = [
    'Alice', 'Bob', 'Carlos', 'Diana', 'Eduardo', 'Fernanda',
    'Gabriel', 'Helena', 'Igor', 'Julia', 'Lucas', 'Mariana',
    'Nicolas', 'Olivia', 'Pedro', 'Quintino', 'Rafael', 'Sofia',
    'Tiago', 'Ursula', 'Victor', 'Walter', 'Xenia', 'Yasmin', 'Zeca'
  ]; // Lista longa para teste

  constructor() {}

  onNovaPessoaAdicionada(nome: string): void {
    this.listaDePessoas.push(nome);
  }
}