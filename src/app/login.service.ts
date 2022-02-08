import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './model/Trainer';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(trainer: Trainer) {
    window.sessionStorage.setItem('userdetails', JSON.stringify(trainer));
    return this.http.get('http://localhost:8080/api/v1/login', {
      observe: 'response',
      withCredentials: true,
    });
  }
}
