import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    // Validar que los campos no estén vacíos
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor ingresa email y contraseña';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    // Llamar al servicio de autenticación
    this.authService.login(this.email, this.password);

    // Simular espera para demostrar el estado de carga
    setTimeout(() => {
      this.loading = false;
      // Navegar a la página de usuarios después del login
      this.router.navigate(['/usuarios']);
    }, 1000);
  }

  // Método para limpiar el mensaje de error cuando el usuario escriba
  onInputChange() {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
  }
}
