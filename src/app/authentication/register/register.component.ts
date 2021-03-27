import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/app/shared/constants/urls.constant';
import { IButtonData } from 'src/app/shared/interfaces/button.interface';
import { IFormData } from 'src/app/shared/interfaces/form.interfae';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BUTTON_DATA, FORM_DATA } from '../constants/register.constants';
import { AUTH_URLS } from '../constants/urls.constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginButtonData: IButtonData = BUTTON_DATA;

  formData: IFormData = FORM_DATA;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  /**
   * Navega hacia login
   */
  goToLogin() {
    this.router.navigate([AUTH_URLS.login]);
  }

  /**
   * Controla el evento click del boton del formulario
   * Genera un body con la información del formulario y llama
   * al método registrar del servicio de autenticación, si el registro es exitoso
   * crea un body con los datos del formulario y llama al login, si el login
   * es exitoso, navega a home.
   */
  onButtonClick() {
    const body = {
      name: this.formData.inputsData[0].value,
      email: this.formData.inputsData[1].value,
      password: this.formData.inputsData[2].value,
    };
    this.authService.register(body).subscribe(
      (data) => {
        if (data) {
          // TODO: Esto no se deberia hacer, ya que el back debería retornar el token
          const loginBody = {
            email: body.email,
            password: body.password,
          };
          this.authService.login(loginBody).subscribe(
            (data) => {
              if (data) {
                this.router.navigate([URLS.home]);
              }
            }
          );
        }
      }
    );
  }
}
