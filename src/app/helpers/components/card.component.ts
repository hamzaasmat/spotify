import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'app-music-card',
    template: `
    <div class="m-card">
        <img src="assets/images/logo.svg" class="m-icon" alt="">
        <div class="cover">
            <img [src]="data.images[0].url" *ngIf="cardPlain && data.images && data.images.length > 0" alt="">
            <img [src]="data.album.images[0].url" *ngIf="cardMusic && data.album && data.album.images && data.album.images.length > 0" alt="">
            <img src="assets/images/placeholder-user.png" *ngIf="data.images && data.images.length == 0" alt="">
            <img src="assets/images/placeholder-user.png" *ngIf="data.album && data.album.images && data.album.images.length == 0" alt="">
        </div>
        <div class="m-card-info">
            <h3>{{data.name}}
                <br> <small>{{data.type}}</small>
            </h3>

            <div class="info-bar" *ngIf="infoBar">
                <span>
                    <i class="las la-users f"></i> {{data.followers.total ? data.followers.total:0}}
                </span>
                <span>
                    <i class="las la-fire-alt p"></i> {{data.popularity}}
                </span>
            </div>
            <div class="info-bar" *ngIf="cardMusic">
                <span>
                    <i class="las la-fire-alt p"></i> {{data.popularity}}
                </span>
                <span>
                    <i class="las la-play p"></i>
                </span>
            </div>
        </div>
    </div>
    `
})

export class AppMusicCard {
    constructor() { }
    @Input() data: any = {};
    @Input() infoBar: boolean = true;
    @Input() cardPlain: boolean = true;
    @Input() cardMusic: boolean = false;
    @Output() clicked:any;
}