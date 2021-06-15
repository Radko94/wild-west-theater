import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStoreFacadeService } from './store/user-store-facade.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public userGroup$: Observable<FormGroup>;

  constructor(private readonly _userStoreFacade: UserStoreFacadeService) {}

  ngOnInit(): void {
    this.userGroup$ = this._userStoreFacade.selectors.user$.pipe(
      map(
        (user) =>
          new FormGroup({
            firstName: new FormControl(user.firstName, [Validators.required]),
            lastName: new FormControl(user.lastName, [Validators.required]),
            email: new FormControl(user.email, [
              Validators.required,
              Validators.email,
            ]),
          })
      )
    );
  }

  onSubmit(formValue): void {
    this._userStoreFacade.actions.patchUser(formValue);
  }
}
