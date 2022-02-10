import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../services/notices.service';
import { Observable } from 'rxjs';
import { INotice } from '../model/INotice';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss'],
})
export class NoticesComponent implements OnInit {
  notices$: Observable<INotice[]> = this.notificationService.getNotices();

  constructor(private notificationService: NoticesService) {}

  ngOnInit(): void {}
}
