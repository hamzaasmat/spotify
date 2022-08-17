import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SharedDataService {
    public loadingBarSource = new BehaviorSubject(false);
    loadingBarStatus = this.loadingBarSource.asObservable();

    private dataTransferSubject = new Subject<any[]>()
    dataTransferObservable = this.dataTransferSubject.asObservable();

    private player = new Subject<any[]>()
    playerObs = this.player.asObservable();

    /**
    * This method used to emit value for loading status
    * @param status
    */
    showLoadingBar(status: boolean) {
        this.loadingBarSource.next(status);
    }


    push(data: any) {
        this.dataTransferSubject.next(data);
    }

    setPlayer(data: any) {
        this.player.next(data);
    }
}