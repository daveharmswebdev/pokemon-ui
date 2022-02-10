import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBattle } from '../model/IBattle';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  constructor(private http: HttpClient) {}

  getBattles(): Observable<IBattle[]> {
    return this.http.get<IBattle[]>('http://localhost:8080/api/v1/battle');
  }
}
