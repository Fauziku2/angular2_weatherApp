"use strict";
var router_1 = require("@angular/router");
var city_list_component_1 = require("./city-list.component");
var weather_component_1 = require("./weather.component");
var routes = [
    { path: "", component: city_list_component_1.CityListComponent },
    { path: "weather/:woeId", component: weather_component_1.WeatherComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map