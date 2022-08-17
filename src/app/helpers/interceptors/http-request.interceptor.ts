import { catchError, tap } from 'rxjs/operators';
import {
    HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse,
} from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { SharedDataService } from "../services/shared-data.service";
import { Observable } from "rxjs";
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(public router: Router,
        public sharedDataService: SharedDataService,
        public localService: LocalStorageService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.localService.getToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.localService.getToken.replace(/^"(.+(?="$))"$/, '$1')
                }
            })
        }
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            //   if (request.url.indexOf("assets/images/svg-icons") === -1) {
            if (event instanceof HttpResponse) {
                this.handleRequest();
            } else {
                this.handleRequest(true);
            }
            //   }
        }, (err: any) => {
            this.handleRequest();
        }, () => {
            this.handleRequest();
        }));
    }

    private handleRequest(bool: boolean = false) {
        this.sharedDataService.showLoadingBar(bool);
    }
}
