import { AfterContentInit, AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppBaseComponent } from '@app/helpers/components/app-base.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AppBaseComponent implements OnInit, AfterContentInit, AfterViewInit {

  public artistsList: any[] = [];
  public noRecordFound: boolean = false;
  constructor(
    injector: Injector,
    private _dashboardService: DashboardService
  ) {
    super(injector);
    this.getSearchedData()
  }

  ngOnInit(): void {
    this.addFormFields();
  }

  ngAfterContentInit() {

  }
  ngAfterViewInit() {

  }

  addFormFields() {
    this.formGroup = new FormGroup({
      appSearch: new FormControl('')
    })
    this.formGroup.get('appSearch')?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        if (value) {
          this.getArtists(value);
          this._dashboardService.getUserPlaylists().subscribe(response => {
            if (response) {
              console.log(response)
            }
          })
        }
      })

  }

  getArtists(q: string) {
    this._dashboardService.searchForArtists(q).subscribe(res => {
      if (res) {
        let data: any[] = res.artists.items;
        this.router.navigate(['_/dashboard']);
        this._sharedDataService.push(data);

      }
    })
  }


  getSearchedData() {
    this.artistsList = []
    this._sharedDataService.dataTransferObservable.subscribe((data: any) => {
      if (data) {
        if (data.length > 0) {
          this.artistsList = data;
          this.noRecordFound = false;
        } else
          if (data.length == 0) {
            this.artistsList = [];
            this.noRecordFound = true;
          }
      }
    })
  }

  goForSingleArtist(id: number) {
    this.router.navigate(['_/artist', id])
  }


}
