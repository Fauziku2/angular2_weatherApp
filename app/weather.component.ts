import { Component } from "@angular/core";

interface WeatherInformation {
  city: string;
  code: number;
  temperature: number;
}

@Component({
  templateUrl: "/app/weather.component.html"
})

export default class WeatherComponent implements OnInit {
  weather: WeatherInformation = undefined;

  weatherExist() {
    return !!this.weather;
  }
}
