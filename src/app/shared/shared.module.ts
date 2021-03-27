import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './factory/translate.factory';
import { HttpClient } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { FormComponent } from './components/form/form.component';

const SHARED_EXPORTS = [
  ButtonComponent,
  InputComponent,
  FormComponent
];

@NgModule({
  declarations: [
    ...SHARED_EXPORTS,
  ],
  exports: [
    ...SHARED_EXPORTS
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class SharedModule { }
