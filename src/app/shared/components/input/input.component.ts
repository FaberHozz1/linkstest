import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IInputData } from '../../interfaces/input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() inputData: IInputData;
  @Output() changeValue: EventEmitter<void> = new EventEmitter();
  
  /**
   * Establece el valor en el input
   * Emite el valor del input.
   * @param event 
   */
  onChange(event) {
    this.inputData.value = event.target.value;
    this.changeValue.emit();
  }

}
