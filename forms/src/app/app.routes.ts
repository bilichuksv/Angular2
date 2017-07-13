import { Routes } from "@angular/router";
import { FilmListComponent } from "./film-list/film-list.component";
import { LoginComponent } from "./login/login.component";
import { PaymentFormComponent } from "./payment-form/payment-form.component";

export const routes: Routes =[
    { path: '', component: FilmListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'payment-form', component: PaymentFormComponent},
    { path: '**', redirectTo: 'login'}
];