import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule

@Component({
  selector: 'app-adicionar-pessoa-form',
  standalone: true,
  imports: [FormsModule], // Adicione FormsModule aqui
  templateUrl: './adicionar-pessoa-form.component.html',
  styleUrls: ['./adicionar-pessoa-form.component.css']
})
export class AdicionarPessoaFormComponent {
  @Output() pessoaAdicionada = new EventEmitter<string>();
  nomePessoa: string = '';

  constructor() { }

  adicionarPessoa(): void {
    if (this.nomePessoa.trim()) {
      this.pessoaAdicionada.emit(this.nomePessoa.trim());
      this.nomePessoa = ''; // Limpa o campo após adicionar
    } else {
      alert('Por favor, insira um nome.');
    }
  }
}