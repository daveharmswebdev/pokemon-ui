import { Component, OnInit } from '@angular/core';
import { NoticesService } from './services/notices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pokemon-ui';
  notices$ = this.notificationService.getNotices();

  constructor(private notificationService: NoticesService) {}

  ngOnInit() {
    this.notices$.subscribe((notices) => console.log(notices));
  }
}
