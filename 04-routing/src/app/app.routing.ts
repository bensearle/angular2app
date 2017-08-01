import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";
import { USER_ROUTES } from "./user/user.routes";
const APP_ROUTES: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    { path: 'user', redirectTo: '/user/12345', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/user/123456789', pathMatch: 'full' } // e.g. error 404 page not found
];

export const routing = RouterModule.forRoot(APP_ROUTES);