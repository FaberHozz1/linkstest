import { IButtonData } from "./button.interface";
import { IInputData } from "./input.interface";

export interface IFormData {
  title?: string;
  inputsData: IInputData[],
  buttonData: IButtonData,
  terms?: string;
}
