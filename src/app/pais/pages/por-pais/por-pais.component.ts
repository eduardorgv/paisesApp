import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  countriesSuggested : Country[] = [];
  showSuggestions: boolean = false;

  constructor(private paisService: PaisService) { }

  search(term: string) {
    this.error = false;
    this.term = term;
    this.showSuggestions = false;

    this.paisService.searchCountry(this.term)
      .subscribe( (resp) => {
        console.log(resp);
        this.countries = resp;
      }, (err) => {
        this.error = true;
        this.countries = [];
      });
  }

  suggestion(term: string) {
    this.error = false;
    this.term = term;
    this.showSuggestions = true;

    this.paisService.searchCountry(term)
      .subscribe(
        countries => this.countriesSuggested = countries.splice(0,5),
        (err) => this.countriesSuggested = []
        );
  }

  searchSuggested(term: string) {
    this.search(term);
  }

}
