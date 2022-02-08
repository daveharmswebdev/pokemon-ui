import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../services/notices.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent implements OnInit {
  notices$ = this.notificationService.getNotices();

  constructor(private notificationService: NoticesService) {}

  ngOnInit(): void {}
}
