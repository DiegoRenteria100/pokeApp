import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent {
    constructor(private apiService: ApiService, private router :Router) {}
    pokemons: any[] = [];
    pokemonsFiltered: any[] = [];

    ngOnInit(): void {
        this.apiService.getPokemonList().subscribe(
            (list: any[]) => {
                this.pokemons = list;
                this.pokemonsFiltered = list;
            }
        )
    }

    filterPokemons(pokemonName: any) {
        this.pokemonsFiltered = this.pokemons.filter(pokemon => 
            pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
        );
    }

    goToAuthor(){
        this.router.navigate(['author']);
    }
}
