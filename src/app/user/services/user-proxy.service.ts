import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { IUser } from '@user/interfaces/interfaces';

@Injectable()
export class UserProxyService {
  public constructor(private readonly _httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<IUser> {
    return this._httpClient.post<IUser>(environment.apiUrl + '/login', {
      email,
      password,
    });
  }
}
