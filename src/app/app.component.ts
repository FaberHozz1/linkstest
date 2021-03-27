import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './shared/services/loader.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'links';

  constructor(
    private translate: TranslateService,
    private loaderService: LoaderService,
    private ngxService: NgxUiLoaderService,
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.setListenerLoader();
  }

  /**
   * Establece un escuchador de estados para el mostrar u ocultar el loader
   */
   async setListenerLoader() {
    this.loaderService.getShowLoader().subscribe(
      showLoader => {
        if(showLoader) {
          this.ngxService.start();
          return;
        }
        this.ngxService.stop();
      },
    );
  }
}
