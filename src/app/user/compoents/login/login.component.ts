import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginRequest } from '../../store/user.actions';
import { IUserState } from '../../store/user.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginGroup: FormGroup;

  constructor(private readonly _store: Store<IUserState>) {}

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit(formGroupValue: { email: string }): void {
    if (this.loginGroup.valid)
      this._store.dispatch(
        loginRequest({ payload: { email: formGroupValue.email } })
      );
  }
}
