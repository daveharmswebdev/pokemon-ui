import { Component, OnInit } from '@angular/core';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battles',
  templateUrl: './battles.component.html',
  styleUrls: ['./battles.component.scss'],
})
export class BattlesComponent implements OnInit {
  battles$ = this.service.getBattles();

  constructor(private service: BattleService) {}

  ngOnInit(): void {}
}
