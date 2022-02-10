import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon$ = this.service.getPokemon().pipe(tap(console.log));

  constructor(private service: PokemonService) {}

  ngOnInit(): void {}
}
