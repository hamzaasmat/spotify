import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class LocalStorageService {

    constructor() {

    }
    setDatainLocalStorage(key: any, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getDataFromLocalStorage(key: string) {
        const item = localStorage.getItem(key);
        if (item && item != 'undefined') {
            return JSON.parse(item);
        }
        return null;
    }

    removeDataFromLocalStorage(key: string) {
        localStorage.removeItem(key);
    }

    set(key: any, value: any) {
        this.setDatainLocalStorage(key, value);
    }

    get(key: string) {
        return this.getDataFromLocalStorage(key);
    }

    remove(key: string) {
        this.removeDataFromLocalStorage(key);
    }

    clearLocalStoarge() {
        localStorage.clear()
    }

    get getToken() {
        return localStorage.getItem('access_token')
    }

    get getCode() {
        return localStorage.getItem('code')
    }

}