import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe CommonModule

@Component({
  selector: 'app-lista-pessoas',
  standalone: true,
  imports: [CommonModule], // Adicione CommonModule aqui para *ngFor, *ngIf, etc.
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent {
  @Input() pessoas: string[] = []; // Recebe a lista de pessoas do componente pai

  constructor() { }
}