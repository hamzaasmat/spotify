import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { BaseNetworkService } from "@app/helpers/services/base-network.service";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class AuthanticationService extends BaseNetworkService {
    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    auth(code: string) {
        let body = new URLSearchParams();
        body.set('grant_type', this.CONST.GRANT_TYPE);
        body.set('code', code);
        body.set('redirect_uri', this.CONST.redirect_uri);
        body.set('client_id', this.CONST.client_id);
        body.set('client_secret', this.CONST.client_secret);
        return this.http.post(this.ENDPOINTS.AUTH_TOKEN, body, { headers: this.initHeaders() }).pipe(
            map((response: any) => {
                if (<any>response.access_token) {
                    return response;
                } else {
                    this.handleErrorMessages(response);
                    return null;
                }
            }),
            catchError(this.handleErrorMessages.bind(this))
        );
    }

    getUserProfile() {
        return this.http.get(this.ENDPOINTS.USER,).pipe(
            map((response: any) => {
                if (<any>response) {
                    return response;
                } else {
                    this.handleErrorMessages(response);
                    return null;
                }
            }),
            catchError(this.handleErrorMessages.bind(this))
        );
    }
}