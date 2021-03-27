import { Component, OnInit } from '@angular/core';
import { IButtonData } from 'src/app/shared/interfaces/button.interface';
import { IFormData } from 'src/app/shared/interfaces/form.interfae';
import { IBodyCreateLink, ILinkData } from 'src/app/shared/interfaces/link.interface';
import { IUserData } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LinksService } from 'src/app/shared/services/links.service';
import { UserService } from 'src/app/shared/services/user.service';
import { BUTTON_DATA, FORM_DATA } from '../constants/links.constants';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  logoutButtonData: IButtonData = BUTTON_DATA;
  formData: IFormData = FORM_DATA;
  userData: IUserData;
  linksData: ILinkData[];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private linksService: LinksService,
  ) { }

  ngOnInit(): void {
    this.getUserData();
    this.getListLinks();
  }

  /**
   * Obtiene la información del usuario.
   */
  getUserData() {
    /**
     * TODO: No debería ser necesario enviar el id, y no esta válidando el token.
     * Posible problema de seguridad
     */
    this.userService.getUserByID(1).subscribe(
      (userData: IUserData) => this.userData = userData,
      error => console.log('---> getUserData Error: ', error)
    );
  }

  /**
   * Obtiene el listado de links
   */
  getListLinks() {
    /**
     * TODO: No esta válidando el token de sesión
     */
    this.linksService.getLinksList().subscribe(
      (linksData: ILinkData[]) => {
        this.linksData = [...linksData];
      },
      error => console.log('---> getListLinks Error: ', error)
    );
  }

  /**
   * Llama el método cerrar sesión del servicio de autenticación
   */
  doLogout() {
    this.authService.logout();
  }

  /**
   * Crea un link nuevo y lo agrega al listado
   */
  doCreateLink() {
    const body: IBodyCreateLink = {
      url: this.formData.inputsData[0].value,
      name: this.formData.inputsData[1].value,
    };
    this.linksService.createLink(body).subscribe(
      (linkData: ILinkData) => {
        this.linksData.push(linkData);
      },
      error => console.log('---> doCreateLink Error: ', error)
    );
  }

  /**
   * Elimina el link y lo remieve del listado
   * @param linkData link a eliminar
   * @param index posición del link en el listado de links
   */
  doDeleteLink(linkData: ILinkData, index: number) {
    this.linksService.deleteLink(linkData.id).subscribe(
      (linkData: ILinkData) => {
        this.linksData.splice(index,1);
      },
      error => console.log('---> doCreateLink Error: ', error)
    );
  }
}
