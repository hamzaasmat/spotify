import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import { LocalStorageService } from "./local-storage.service";
import * as ROUTES from '@helpers/constants/routes';
import * as ENDPOINTS from '@helpers/constants/endpoints';
import * as CONST from '@helpers/constants/const';
import { MatSnackBar } from "@angular/material/snack-bar";
import { SharedDataService } from "./shared-data.service";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class BaseNetworkService {

    public localService: LocalStorageService;
    protected router: Router;
    protected http: HttpClient;
    // protected constantList = CONST;
    protected ENDPOINTS = ENDPOINTS;
    protected ROUTES = ROUTES;
    protected CONST = CONST;
    private _headers: any;
    private _multipartFormDataHeaders: any;
    private snackBar: MatSnackBar;
    private _sharedDataService: SharedDataService;


    constructor(injector: Injector) {
        this.localService = injector.get(LocalStorageService);
        this.router = injector.get(Router);
        this.http = injector.get(HttpClient);
        this.snackBar = injector.get(MatSnackBar);
        this._sharedDataService = injector.get(SharedDataService);
        // this.initHeaders();
    }

    /**
     * Following methos used to initialie the request headers
     */

    initHeaders() {
        /**
         * HttpHeader class are immutable objects.
         */
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        return headers;
    }
    getErrorMessages(json: any): any {
        const errors = [];
        debugger
        if (json) {
            if (json.error) {
                errors.push(json.error)
            }
        }
        return errors;
    }
    handleErrorMessages(json: any) {
        if (json.error) {
            if (json.error.error.status == 401) {
                this.showMessage(json.error.error.message + 'or invalid market');
            } else {
                this.showMessage(json.error.error);
            }

        }
        return throwError(json)
    }
    showMessage(msg: string, type = "error") {
        this.snackBar.open(msg, this.CONST.DEFAULT_SNACKBAR_MSG, {
            duration: this.CONST.DEFAULT_SNACKBAR_DURATION + 5000,
            verticalPosition: "bottom",
        }
        );
    }

    // get headers(): HttpHeaders {
    //     if (!this._headers) {
    //         this.initHeaders();
    //     }

    //     return this._headers;
    // }
}