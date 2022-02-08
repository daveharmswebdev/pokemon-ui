import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Trainer } from '../model/Trainer';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    username: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    const trainer = new Trainer();
    trainer.email = this.loginForm.get('username')?.value;
    trainer.password = this.loginForm.get('password')?.value;
    console.log(trainer, this.loginForm.value);

    this.loginService.login(trainer).subscribe(
      (response) => {
        const model = <any>response.body;
        model.authStatus = 'AUTH';
        window.sessionStorage.setItem('userdetails', JSON.stringify(model));
        let xsrf = this.getCookie('XSRF-TOKEN');
        window.sessionStorage.setItem('XSRF-TOKEN', xsrf);
        console.log('looks good');
        this.router.navigate(['/notices']);
      },
      (error) => {
        console.log('something went wrong', error);
      }
    );
  }

  getCookie(name: any) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
      let [k, v] = el.split('=');
      // @ts-ignore
      cookie[k.trim()] = v;
    });
    // @ts-ignore
    return cookie[name];
  }
}
