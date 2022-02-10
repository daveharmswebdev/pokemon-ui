import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoticesComponent } from './notices/notices.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattlesComponent } from './battles/battles.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'battles', component: BattlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
