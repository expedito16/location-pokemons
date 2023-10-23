import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { ShowCityPokemonComponent } from './show-city-pokemon/show-city-pokemon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ShowCityPokemonComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ShowCityPokemonComponent,
    HeaderComponent,
    FooterComponent,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
