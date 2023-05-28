import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from '../data/cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  citiesList: any = cities;
  cityIndex: string | null = '';
  city: any;

  constructor(private route: ActivatedRoute) {}

  /**
   * Triggers when the component is generated.
   * Subscribes to the route to get the list of cities.
   */
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.cityIndex = params.get('id');
      this.city = this.citiesList.find((city: any) => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
    });
  }
}
