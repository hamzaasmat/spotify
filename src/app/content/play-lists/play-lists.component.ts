import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '@app/helpers/components/app-base.component';
import { PlayListsService } from './services/play-lists.service.component';

@Component({
  selector: 'app-play-lists',
  templateUrl: './play-lists.component.html',
  styleUrls: ['./play-lists.component.scss']
})
export class PlayListsComponent extends AppBaseComponent implements OnInit {

  public savedPlaylists: any[] = [];
  public likedTracks: any[] = [];
  constructor(
    injector: Injector,
    private _playListsService: PlayListsService,
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.getUserPlaylists();
    this.getUserSavedTracks();
  }

  getUserPlaylists() {
    this._playListsService.getUserPlaylists().subscribe(response => {
      this.savedPlaylists = response.items;

    })
  }

  getUserSavedTracks() {
    this._playListsService.getUserSavedTracks().subscribe(response => {
      this.likedTracks = response.items;
    })
  }
}
