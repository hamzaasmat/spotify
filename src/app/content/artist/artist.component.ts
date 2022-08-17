import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { AppBaseComponent } from '@app/helpers/components/app-base.component';
import { ArtistService } from './services/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent extends AppBaseComponent implements OnInit {

  public singleArtist: any = {};
  public artistAlbums: any[] = [];
  public artistTopTracks: any[] = [];
  public playerSrc: any = '';
  constructor(
    injector: Injector,
    public _artistService: ArtistService
  ) {
    super(injector)
  }
  getSrc(s: any) {
    this.playerSrc = s;
    this._sharedDataService.setPlayer(s);
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe((p: any) => {
      if (p) {
        this._artistService.getSingleArtist(p.params.id).subscribe(response => {
          this.singleArtist = response;
        })
        this._artistService.getSingleArtistAlbum(p.params.id).subscribe(response => {
          this.artistAlbums = response.items;
        })
        this._artistService.getSingleArtistTopTracks(p.params.id).subscribe(response => {
          this.artistTopTracks = response.tracks;
          this.artistTopTracks.map(t => {
            t.link = t.preview_url;
          })
        })
      }
    })
  }

}
