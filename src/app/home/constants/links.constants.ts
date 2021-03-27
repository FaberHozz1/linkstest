import { IButtonData } from "src/app/shared/interfaces/button.interface";
import { IFormData } from "src/app/shared/interfaces/form.interfae";

export const BUTTON_DATA: IButtonData = {
  text: 'home.links.button'
};

const i18n = `home.links.form.`;

export const FORM_DATA: IFormData = {
  inputsData: [
    {
      text: `${i18n}input-url`,
      type: 'text'
    },
    {
      text: `${i18n}input-url-name`,
      type: 'text'
    },
  ],
  buttonData: {
    text: `${i18n}button`,
    fill: true,
    disabled: true
  }
};