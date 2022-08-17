import { Injectable, Injector } from "@angular/core";
import { BaseNetworkService } from "@app/helpers/services/base-network.service";
import { catchError, map } from "rxjs/operators";

@Injectable()

export class HomeService extends BaseNetworkService {
    constructor(
        injector: Injector
    ) {
        super(injector)
    }

    browseCategories() {
        return this.http.get(this.ENDPOINTS.BROWSE_CATEGORIES).pipe(
            map((response: any) => {
                if (<any>response) {
                    return response;
                } else {
                    this.handleErrorMessages(response);
                    return null;
                }
            }),
            catchError(this.handleErrorMessages.bind(this))
        )
    }

    browseNewReleases() {
        return this.http.get(this.ENDPOINTS.BROWSE_NEW_RELEASES).pipe(
            map((response: any) => {
                if (<any>response) {
                    return response;
                } else {
                    this.handleErrorMessages(response);
                    return null;
                }
            }),
            catchError(this.handleErrorMessages.bind(this))
        )
    }

    browseFeaturedPlaylists() {
        return this.http.get(this.ENDPOINTS.BROWSE_FEATURED_PLAYLISTS).pipe(
            map((response: any) => {
                if (<any>response) {
                    return response;
                } else {
                    this.handleErrorMessages(response);
                    return null;
                }
            }),
            catchError(this.handleErrorMessages.bind(this))
        )
    }
}