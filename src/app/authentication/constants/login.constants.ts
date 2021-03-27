import { IButtonData } from "src/app/shared/interfaces/button.interface";
import { IFormData } from "src/app/shared/interfaces/form.interfae";

export const BUTTON_DATA: IButtonData = {
  text: 'authentication.login.button',
};

const i18n = 'authentication.login.form.';

export const FORM_DATA: IFormData = {
  title: `${i18n}title`,
  buttonData: {
    text: `${i18n}button`,
    fill: true,
    disabled: true,
  },
  inputsData: [
    {
      text: `${i18n}input-email`,
      type: 'email',
    },
    {
      text: `${i18n}input-password`,
      type: 'password',
    },
  ]
};