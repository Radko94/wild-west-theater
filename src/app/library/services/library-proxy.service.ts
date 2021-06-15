import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { IStagePlay, IStagePlayDetails } from '../interfaces/interfaces';

@Injectable()
export class LibraryProxyService {
  constructor(private readonly _httpClient: HttpClient) {}

  getStagePlays(): Observable<IStagePlay[]> {
    return this._httpClient
      .get<IStagePlay[]>(environment.apiUrl + '/stagePlays')
  }

  getStagePlay(id: string): Observable<IStagePlayDetails> {
    return this._httpClient
      .get<IStagePlayDetails>(environment.apiUrl + '/stagePlays/' + id)
  }
}
