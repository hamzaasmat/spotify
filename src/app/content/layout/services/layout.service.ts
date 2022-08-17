import { Injectable, Injector } from "@angular/core";
import { BaseNetworkService } from "@app/helpers/services/base-network.service";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class LayoutService extends BaseNetworkService {
    constructor(
        injector: Injector
    ) {
        super(injector);
    }

    searchForArtists(q: string, type: string = 'artist') {
        let params = {
            q: q,
            type: type,
            limit: 50
        }
        return this.http.get(this.ENDPOINTS.SEARCH, { params: params }).pipe(
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

    getUserPlaylists() {
        return this.http.get(this.ENDPOINTS.USER_PLAYLIST,).pipe(
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