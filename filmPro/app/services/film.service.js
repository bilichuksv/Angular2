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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
        this.searchUrl = "http://www.omdbapi.com/?s=";
        this.filmUrl = "http://www.omdbapi.com/?i=";
        this.apiKey = "&apikey=520bbe17";
        this.pageSpace = "&page=";
        this.page = 1;
        this.lastFilmsName = 'lord';
    }
    FilmService.prototype.extractListData = function (res) {
        var body = res.json();
        return body.Search || {};
    };
    FilmService.prototype.extractItemData = function (res) {
        var body = res.json();
        return body || {};
    };
    FilmService.prototype.getFilms = function (filmName) {
        this.page = 1;
        this.lastFilmsName = filmName;
        return this.http.get(this.searchUrl + filmName + this.pageSpace + this.page + this.apiKey).map(this.extractListData);
    };
    FilmService.prototype.getFilmsPage = function () {
        this.page++;
        return this.http.get(this.searchUrl + this.lastFilmsName + this.pageSpace + this.page + this.apiKey).map(this.extractListData);
    };
    FilmService.prototype.getFilmById = function (filmId) {
        return this.http.get(this.filmUrl + filmId + this.pageSpace + this.page + this.apiKey).map(this.extractItemData);
    };
    FilmService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FilmService);
    return FilmService;
}());
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map