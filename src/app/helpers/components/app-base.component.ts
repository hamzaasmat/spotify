import { ChangeDetectionStrategy, Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import * as ROUTES from "@helpers/constants/routes";
import * as ENDPOINTS from "@helpers/constants/endpoints";
import { ActivatedRoute, Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { LocalStorageService } from '../services/local-storage.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-app-base',
  template: "",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppBaseComponent implements OnInit {

  public routes = ROUTES;
  public enpoints = ENDPOINTS;
  public router: Router;
  public route: ActivatedRoute;
  public _sharedDataService: SharedDataService;
  public _localService: LocalStorageService;

  /**
   * The following is the baseModel instance to the rendered form on the UI
   * @type {FormGroup}
   */
   public formGroup: FormGroup = new FormGroup({});
   public formData: FormData = new FormData();
   public postBody: any = {};

  constructor(injector: Injector) {
    this.router = injector.get(Router);
    this.route = injector.get(ActivatedRoute);
    this._sharedDataService = injector.get(SharedDataService);
    this._localService = injector.get(LocalStorageService);
  }

  ngOnInit(): void {
  }

}
