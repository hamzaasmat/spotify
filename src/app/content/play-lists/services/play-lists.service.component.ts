import { Injectable, Injector } from "@angular/core";
import { BaseNetworkService } from "@app/helpers/services/base-network.service";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class PlayListsService extends BaseNetworkService {
    constructor(
        injector: Injector
    ) {
        super(injector);
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
    getUserSavedTracks() {
        return this.http.get(this.ENDPOINTS.USER_TRACKS,).pipe(
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