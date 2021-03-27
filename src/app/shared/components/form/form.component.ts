import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormData } from '../../interfaces/form.interfae';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() formData: IFormData;
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  /**
   * Emite el evento click del boton
   */
  onButtonClick() {
    this.btnClick.emit();
  }

  /**
   * Valida el formulario para establecer el disbled del boton
   */
  formValid() {
    this.formData.buttonData.disabled = !this.formData.inputsData.every( item => !!(item.value));
  }
}
