import { IButtonData } from "src/app/shared/interfaces/button.interface";
import { IFormData } from "src/app/shared/interfaces/form.interfae";

export const BUTTON_DATA: IButtonData = {
  text: 'authentication.register.button',
};

const i18n = 'authentication.register.form.';

export const FORM_DATA: IFormData = {
  title: `${i18n}title`,
  buttonData: {
    text: `${i18n}button`,
    fill: true
  },
  inputsData: [
    {
      text: `${i18n}input-name`,
      type: 'text',
    },
    {
      text: `${i18n}input-email`,
      type: 'email',
    },
    {
      text: `${i18n}input-password`,
      type: 'password',
    },
  ],
  terms: 'By Creating account You agree to the <span class="blue">Terms of use</span> and <span class="blue">Privacy Polycy</span>'
};