import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
    { path: 'home', component: PokeListComponent },
    { path: 'pokemon-details/:name', component: PokemonDetailsComponent },
    {path:'author', component: AuthorComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
