import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '@helpers/components/app-base.component';
import { AuthanticationService } from '../services/authantication.service';

@Component({
  selector: 'app-authantication',
  templateUrl: '../templates/authantication.component.html',
  styleUrls: ['../styles/authantication.component.scss']
})
export class AuthanticationComponent extends AppBaseComponent implements OnInit {

  public text: string = ''
  constructor(
    injector: Injector,
    public _authService: AuthanticationService,
  ) {
    super(injector)

  }

  ngOnInit(): void {
    if (this._localService.getCode) {

    } else {
      this.verifyCode()
    }
  }

  verifyCode() {
    this.route.queryParamMap.subscribe((q: any) => {
      if (q.params.code) {
        setTimeout(() => {
          this.text = 'Verifying Code';
        }, 1000);
        this._authService.auth(q.params.code).subscribe(response => {
          if (response.access_token) {
            this._localService.set('code', q.params.code)
            this._localService.set('access_token', response.access_token);
            setTimeout(() => {
              this.text = 'Loading User';
            }, 1000);
            this.getUserProfile()
            setTimeout(() => {
              this.router.navigate(['_']);
            }, 500);

          }

        })
      }
    })
  }

  getUserProfile() {
    this._authService.getUserProfile().subscribe(response => {
      if (response) {
        this._localService.set('user', response);
      }
    })
  }
}
