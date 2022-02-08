import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionActiva: string = '';
  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  activarRegion(region: string) {
    if(region === this.regionActiva) {return;}

    this.regionActiva = region;
    this.countries = []

    this.paisService.getRegion(region)
      .subscribe( countries => this.countries = countries);
  }

}
