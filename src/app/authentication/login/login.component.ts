import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { URLS } from 'src/app/shared/constants/urls.constant';
import { IButtonData } from 'src/app/shared/interfaces/button.interface';
import { IFormData } from 'src/app/shared/interfaces/form.interfae';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BUTTON_DATA, FORM_DATA } from '../constants/login.constants';
import { AUTH_URLS } from '../constants/urls.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  registerButtonData: IButtonData = BUTTON_DATA;
  formData: IFormData = FORM_DATA;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  /**
   * Navega hacia la página de registro
   */
  goToRegister() {
    this.router.navigateByUrl(`${URLS.authentication}/${AUTH_URLS.register}`);
  }

  /**
   * Controla el evento click sobre el boton login.
   * Establece el valor del formulario en en body y llama al
   * método login del servicio de autenticación.
   * Si el login es exitoso navega a home
   */
  onButtonClick() {
    const body = {
      email: this.formData.inputsData[0].value,
      password: this.formData.inputsData[1].value,
    };
    this.authService.login(body).subscribe(
      (data) => {
        if (data) {
          this.router.navigate([URLS.home]);
        }
      }
    );
  }
}
