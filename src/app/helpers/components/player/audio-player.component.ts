import { Component, Injector, Input, OnInit } from "@angular/core";
import { AppBaseComponent } from "../app-base.component";

@Component({
    selector: 'app-player',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss']
})

export class AppPlayer extends AppBaseComponent implements OnInit {
    @Input() src: any = '';
    public player = new Audio;
    public isPlaying = false;

    constructor(
        injector: Injector
    ) {
        super(injector)
        // this.player.ontimeupdate = (e) => this.up(this.player.currentTime);

    }

    ngOnInit() {
        this._sharedDataService.playerObs.subscribe((res: any) => {
            this.player.src = res;
            this.toggle()
        })
    }

    toggle() {
        this.player.paused ? this.player.play() : this.player.pause();
    }

    pause() {
        this.player.pause();
        console.log(this.player)
        console.log(this.player.duration)
        console.log(this.player.preload)
        // console.log(this.player.outerText)
        console.log(this.player.currentTime)
        // console.log()
        console.log(this.player.playbackRate)
    }
    up(e: number) {
        console.log(e.toFixed(0))
    }


}