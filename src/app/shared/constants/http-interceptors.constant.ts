import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../interceptors/auth.interceptor";
import { LoaderInterceptor } from "../interceptors/loader.interceptor";

export const HTTP_INTERCEPTORS_PROVIDER = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
];