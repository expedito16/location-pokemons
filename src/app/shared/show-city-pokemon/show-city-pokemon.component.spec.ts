import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCityPokemonComponent } from './show-city-pokemon.component';

describe('ShowCoutryPokemonComponent', () => {
  let component: ShowCityPokemonComponent;
  let fixture: ComponentFixture<ShowCityPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCityPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCityPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
