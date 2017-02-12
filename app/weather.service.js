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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
        this.cities = [
            { name: "Bogota", imageSrc: "img/bogota.jpg", woeId: "368148" },
            { name: "Cape Town", imageSrc: "img/cape-town.jpg", woeId: "1591691" },
            { name: "London", imageSrc: "img/london.jpg", woeId: "44418" },
            { name: "New Delhi", imageSrc: "img/delhi.jpg", woeId: "28743736" },
            { name: "New York", imageSrc: "img/new-york.jpg", woeId: "2459115" },
            { name: "Paris", imageSrc: "img/paris.jpg", woeId: "615702" },
            { name: "Sydney", imageSrc: "img/sydney.jpg", woeId: "1105779" },
            { name: "Tokyo", imageSrc: "img/tokyo.jpg", woeId: "1118370" },
            { name: "Vancouver", imageSrc: "img/vancouver.jpg", woeId: "9807" }
        ];
    }
    WeatherService.prototype.getWeather = function (woeId) {
        var _this = this;
        var url = this.generateWeatherUrl(woeId);
        return this.http.get(url).toPromise()
            .then(function (x) {
            var apiResponse = x.json();
            var weather = apiResponse.query.results.channel.item.condition;
            return {
                city: _this.getCityName(woeId),
                code: Number(weather.code),
                temperature: Number(weather.temp)
            };
        });
    };
    WeatherService.prototype.generateWeatherUrl = function (woeId) {
        return "http://localhost:8001/api/weather/" + woeId;
    };
    WeatherService.prototype.getCityName = function (woeId) {
        var matches = this.cities.filter(function (x) { return x.woeId === woeId; });
        return matches.length === 1 ? matches[0].name : undefined;
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WeatherService);
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map