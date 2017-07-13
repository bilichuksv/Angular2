import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {FilmService} from '../services/film.service'

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ],
    providers: [FilmService]
})

export class DashboardModule{}
