"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var typography_component_1 = require('./typography/typography.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    typography_component_1.TypographyComponent
];
//# sourceMappingURL=dashboard.routes.js.map