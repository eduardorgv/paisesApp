import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  term: string = '';
  error: boolean = false;
  country: Country[] = [];

  constructor(private paisService: PaisService) { }

  search(term: string) {
    this.error = false;
    this.term = term;

    this.paisService.searchCapital(this.term)
      .subscribe( (resp) => {
        console.log(resp);
        this.country = resp;
        console.log(this.country);
      }, (err) => {
        this.error = true;
        this.country = [];
      });
  }

  suggestion(term: string) {
    this.error = false;
  }

}
