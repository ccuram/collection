import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//page
import { AppComponent } from './app.component';
import { CupsComponent } from './cups/cups.component';
import { CupDetailComponent } from './cup-detail/cup-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/cups', pathMatch: 'full' },
    { path: 'app', component: AppComponent },
    { path: 'cups', component: CupsComponent },
    { path: 'detail/:id', component: CupDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];