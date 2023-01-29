import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPage} from "./pages/login/login.page";
import {GuitarCataloguePage} from "./pages/guitar-catalogue/guitar-catalogue.page";
import {ProfilePage} from "./pages/profile/profile.page";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  },
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "guitars",
    component: GuitarCataloguePage,
    canActivate: [AuthGuard]
  },
  {
    path: "profile",
    component: ProfilePage,
    canActivate: [AuthGuard],
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}




