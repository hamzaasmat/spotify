"use strict";
import { AppConfig } from '../../app.config';
import * as CONSTANT from './const';

const apiConfig = new AppConfig();

export const SERVER_URL: string = apiConfig.config.apiUrl.backendUrl;

/**
 * Authantication
 */
export const EXTERNAL_AUTH: string = `${apiConfig.config.apiUrl.authorization}?client_id=${CONSTANT.client_id}&response_type=${CONSTANT.response_type}&redirect_uri=${CONSTANT.redirect_uri}&scope=${CONSTANT.SCOPES}`;
export const AUTH_TOKEN: string = `${apiConfig.config.apiUrl.auth_token}`;

/**
 * Search 
 */

export const SEARCH: string = `${SERVER_URL}search`;


/**
 * Browse
 */

export const BROWSE: string = `${SERVER_URL}browse`;
export const BROWSE_CATEGORIES: string = `${BROWSE}/categories`;
export const BROWSE_NEW_RELEASES: string = `${BROWSE}/new-releases`;
export const BROWSE_FEATURED_PLAYLISTS: string = `${BROWSE}/featured-playlists`;

/**
 * User & Follows & Following & Playlists
 */

export const USER: string = `${SERVER_URL}me`;
export const USER_PLAYLIST: string = `${USER}/playlists`;
export const USER_FOLLOW: string = `${USER}/following`;           // GET for followed Artists & PUT for follow artists
export const USER_TRACKS: string = `${USER}/tracks`;


/**
 * Artist
 */

export const ARTIST: string = `${SERVER_URL}artists/{id}`;
export const ARTIST_ALBUM: string = `${ARTIST}/albums`;
export const ARTIST_TOP_TRACKS: string = `${ARTIST}/top-tracks`;
export const ARTIST_RLATED_ARTISTS: string = `${ARTIST}/{id}/related-artists`;
