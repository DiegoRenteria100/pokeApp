import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ApiService } from './services/api.service';
import { QuoteService } from './services/quote.service';

import { UpperCaseCustomPipe } from './pipes/upper-case-custom.pipe';
import { ToLowerCaseCustomPipe } from './pipes/lowerCaseCustom/lower-case-custom.pipe';

import { PokeListComponent } from './poke-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackToMainComponent } from './components/back-to-main/back-to-main.component';
import { AuthorComponent } from './author/author.component';
import { GenerateQuoteComponent } from './components/generate-quote/generate-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokemonDetailsComponent,
    PokeCardComponent,
    UpperCaseCustomPipe,
    ToLowerCaseCustomPipe,
    NotFoundComponent,
    BackToMainComponent,
    AuthorComponent,
    GenerateQuoteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    ApiService, 
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
