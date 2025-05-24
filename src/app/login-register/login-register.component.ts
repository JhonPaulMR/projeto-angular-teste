import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  username?: string;
  email: string;
  password: string; // Em um app real, NUNCA armazene senhas em texto puro! Hasheie no backend.
}

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isLoginMode: boolean = true;
  email: string = '';
  password: string = '';
  username: string = '';
  confirmPassword: string = '';

  // Propriedades para a mensagem de feedback com tipo (para estilização)
  feedbackMessageText: string = '';
  feedbackMessageType: 'success' | 'error' | '' = '';

  logoUrl: string = 'https://placehold.co/200x70/1a1a1a/ff0000?text=VNes&font=pixel';
  pageTitle: string = 'Login - VNes';

  // Array para armazenar usuários cadastrados (para simulação em frontend)
  private registeredUsers: User[] = [
    // Exemplo de usuário pré-cadastrado para facilitar testes iniciais
    // { email: 'test@vnes.com', password: 'password123', username: 'TestUser' }
  ];

  constructor() {
    this.updatePageTitle();
  }

  private updatePageTitle(): void {
    this.pageTitle = this.isLoginMode ? 'Login - VNes' : 'Cadastro - VNes';
  }

  private setFeedbackMessage(message: string, type: 'success' | 'error' | ''): void {
    this.feedbackMessageText = message;
    this.feedbackMessageType = type;
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.updatePageTitle();
    this.setFeedbackMessage('', ''); // Limpa a mensagem
    // Limpa os campos do formulário ao trocar
    this.email = '';
    this.password = '';
    this.username = '';
    this.confirmPassword = '';
  }

  onSubmit(form: NgForm): void {
    this.setFeedbackMessage('', ''); // Limpa mensagens anteriores

    if (form.invalid) {
      this.setFeedbackMessage('Por favor, preencha todos os campos corretamente.', 'error');
      return;
    }

    if (this.isLoginMode) {
      // Lógica de Login ATUALIZADA
      console.log('Tentativa de Login com:', { email: this.email, password: this.password });
      const foundUser = this.registeredUsers.find(
        user => user.email.toLowerCase() === this.email.toLowerCase() && user.password === this.password
      );

      if (foundUser) {
        this.setFeedbackMessage(`Login realizado com sucesso! Bem-vindo de volta, ${foundUser.username || foundUser.email}!`, 'success');
        // Opcional: Limpar formulário após login
        // form.resetForm();
        // this.email = '';
        // this.password = '';
      } else {
        this.setFeedbackMessage('Email ou senha inválidos.', 'error');
      }
    } else {
      // Lógica de Cadastro ATUALIZADA
      if (this.password !== this.confirmPassword) {
        this.setFeedbackMessage('As senhas não coincidem.', 'error');
        return;
      }

      // Verificar se o email já está cadastrado
      if (this.registeredUsers.some(user => user.email.toLowerCase() === this.email.toLowerCase())) {
        this.setFeedbackMessage('Este email já foi cadastrado. Tente outro.', 'error');
        return;
      }

      console.log('Tentativa de Cadastro com:', { username: this.username, email: this.email, password: this.password });
      
      // Adiciona o novo usuário à array (simulação)
      this.registeredUsers.push({
        username: this.username,
        email: this.email,
        password: this.password // Lembre-se: NUNCA faça isso em produção. Senhas devem ser hasheadas.
      });
      
      this.setFeedbackMessage(`Usuário ${this.username} cadastrado com sucesso! Agora você pode fazer o login.`, 'success');
      console.log('Usuários cadastrados (simulação):', this.registeredUsers);

      // Opcional: Limpar formulário e mudar para modo login após cadastro bem-sucedido
      // form.resetForm();
      // this.username = '';
      // this.email = '';
      // this.password = '';
      // this.confirmPassword = '';
      // this.toggleMode(); // Volta para a tela de login
    }
  }
}
