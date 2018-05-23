import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home', pathMatch: 'full'
    }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    //Pour debug: 
    //RouterModule.forRoot(appRoutes, {enableTracing: !environment.production})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

