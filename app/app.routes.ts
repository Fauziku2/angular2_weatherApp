import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CityListComponent }  from "./city-list.component";
import { WeatherComponent } from "./weather.component";

const routes: Routes = [
  {path: "", component: CityListComponent}, // root path
  {path: "weather/:woeId", component: WeatherComponent} // woeId is the city indentifier for the Api
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
