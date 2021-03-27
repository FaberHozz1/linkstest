import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IButtonData } from '../../interfaces/button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() buttonData: IButtonData;
  @Output() btnClick: EventEmitter<void> = new EventEmitter();

  /**
   * Valida el estado activo del boton
   * Si es valido, emite el click
   * @returns 
   */
  onButtonClick() {
    if (this.buttonData.disabled) {
      return;
    }
    this.btnClick.emit();
  }

}
