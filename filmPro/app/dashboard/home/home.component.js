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
var router_1 = require('@angular/router');
var film_service_1 = require('../../services/film.service');
var HomeComponent = (function () {
    function HomeComponent(router, filmService) {
        this.router = router;
        this.filmService = filmService;
        this.filmList = [];
        this.isLoading = false;
    }
    HomeComponent.prototype.goHome = function () {
        this.router.navigate(['typography']);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.filmName = "Lord";
        //this.getFilms();
    };
    HomeComponent.prototype.getFilms = function () {
        var _this = this;
        if (!this.filmName) {
            return;
        }
        this.filmService.getFilms(this.filmName).subscribe(function (data) {
            _this.filmList = data;
            console.log(_this.filmList);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            moduleId: module.id,
            templateUrl: 'home.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, film_service_1.FilmService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map