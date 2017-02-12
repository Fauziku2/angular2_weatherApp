import { Component } from "@angular/core";

interface City {
  name: string;
  imageSrc: string;
  woeId: string;
}

@Component({
  templateUrl: "/app/city-list.component.html"
})

export default class CityListComponent {
  cities: Array<City> = undefined;
}
