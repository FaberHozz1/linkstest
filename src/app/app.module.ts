import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpLoaderFactory } from './shared/factory/translate.factory';

import { NgxUiLoaderModule } from "ngx-ui-loader";
import { HTTP_INTERCEPTORS_PROVIDER } from './shared/constants/http-interceptors.constant';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxUiLoaderModule,
  ],
  providers: [
    HTTP_INTERCEPTORS_PROVIDER,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
