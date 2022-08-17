import { Injectable, Injector } from "@angular/core";
import { BaseNetworkService } from "@app/helpers/services/base-network.service";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class ArtistService extends BaseNetworkService {

    constructor(
        injector: Injector
    ) {
        super(injector)
    }

    getSingleArtist(id: any) {
        let url: string = this.ENDPOINTS.ARTIST.replace('{id}', `${id}`);
        return this.http.get(url).pipe(
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

    getSingleArtistAlbum(id: any, limit: number = 6) {
        let url: string = this.ENDPOINTS.ARTIST_ALBUM.replace("{id}", `${id}`);
        let params = {
            limit: limit
        }
        return this.http.get(url, {params: params}).pipe(
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

    getSingleArtistTopTracks(id: any) {
        let url: string = this.ENDPOINTS.ARTIST_TOP_TRACKS.replace("{id}", `${id}`);
        let params = {
            market: 'PK'
        }
        return this.http.get(url, { params: params }).pipe(
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