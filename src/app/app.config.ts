import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class AppConfig {

    config = {
        name: "Spotify-App",
        title: "Spotify",
        version: "1.0.0",

        apiUrl: {
            backendUrl: 'https://api.spotify.com/v1/',
            authorization: 'https://accounts.spotify.com/authorize',
            auth_token: 'https://accounts.spotify.com/api/token'
        },
    };

    constructor() {
        if (environment.production) {
            this.config.apiUrl.backendUrl = "https://api.spotify.com/v1/";
        }
    }

    getConfig(): Object {
        return this.config;
    }
}

