"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var weather_service_1 = require("./weather.service");
var WeatherComponent = (function () {
    function WeatherComponent(weatherService, route) {
        this.weatherService = weatherService;
        this.route = route;
        this.weather = undefined;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var woeId = params["woeId"];
            _this.weatherService.getWeather(woeId).then(function (x) { return _this.weather = x; });
        });
    };
    WeatherComponent.prototype.weatherExist = function () {
        return !!this.weather;
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    core_1.Component({
        providers: [weather_service_1.WeatherService],
        templateUrl: "/app/weather.component.html"
    }),
    __metadata("design:paramtypes", [weather_service_1.WeatherService, router_1.ActivatedRoute])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map