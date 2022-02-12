import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INotice } from '../model/INotice';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(private http: HttpClient) {}

  getNotices() {
    return this.http.get<INotice[]>('http://localhost:8081/api/v1/notices');
  }
}
