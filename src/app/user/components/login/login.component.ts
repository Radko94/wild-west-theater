import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserStoreFacadeService } from '@user/store/user-store-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginGroup: FormGroup;

  constructor(
    private readonly _userStoreFacade: UserStoreFacadeService
  ) {}

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit(formGroupValue: { email: string, password: string }): void {
    if (this.loginGroup.valid)
      this._userStoreFacade.actions.login(formGroupValue.email, formGroupValue.password);
  }
}
