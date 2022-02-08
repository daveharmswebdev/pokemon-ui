import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoticesService {
  constructor(private http: HttpClient) {}

  getNotices() {
    return this.http.get('http://localhost:8080/api/v1/notices');
  }
}
