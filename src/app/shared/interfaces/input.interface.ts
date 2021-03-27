export interface IInputData {
  type: 'password' | 'email' | 'text';
  text: string;
  value?: string;
}