import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppBaseComponent } from '@app/helpers/components/app-base.component';
import { debounce, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LayoutService } from './services/layout.service';
import { routesList } from './routes';
import { Nav } from './models/nav.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent extends AppBaseComponent implements OnInit {

  public user: any = {};
  public routeList: Nav[] = routesList;
  constructor(injector: Injector,
    public _layoutService: LayoutService
  ) {
    super(injector)
  }

  ngOnInit(): void {
    this.user = this._localService.get('user');
  }



  logout() {
    this._localService.clearLocalStoarge();
    this.router.navigate(['_auth'])
  }




}
