import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { IStagePlay } from '../interfaces/interfaces';
import { map } from 'rxjs/operators';

@Injectable()
export class LibraryProxyService {
  constructor(private readonly _httpClient: HttpClient) {}

  getStagePlays(): Observable<IStagePlay[]> {
    return this._httpClient
      .get<IStagePlay[]>(environment.apiUrl + '/stagePlays')
      .pipe(map((response: any) => response.args));
  }
}
