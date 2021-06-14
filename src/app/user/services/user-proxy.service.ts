import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/interfaces';

@Injectable()
export class UserProxyService {
  public constructor(private _httpClient: HttpClient) {}

  public login(email: string): Observable<IUser> {
    return this._httpClient
      .post<IUser>(environment.apiUrl + '/login', {
        email,
      })
      .pipe(map((response: any) => response.args));
  }
}
