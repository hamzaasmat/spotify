import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '@app/helpers/components/app-base.component';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppBaseComponent implements OnInit {

  public categories: any[] = [];
  public releases: any[] = [];
  public playlists: any[] = [];

  constructor(
    injector: Injector,
    private _homeService: HomeService,
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.getDataListing()
  }

  getDataListing() {
    this._homeService.browseCategories().subscribe(res => {
      this.categories = res.categories.items;
    });
    this._homeService.browseNewReleases().subscribe(res => {
      this.releases = res.albums.items;
    })
    this._homeService.browseFeaturedPlaylists().subscribe(res => {
      this.playlists = res.playlists.items;
    })
  }

}
