import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//custom module
import { AppRoutingModule } from './app-routing.module';

//component
import { AppComponent } from './app.component';
import { CupsComponent } from './cups/cups.component';
import { CupDetailComponent } from './cup-detail/cup-detail.component';

import { AppService } from './app.service';
import { CupSliderComponent } from './cup-detail/cup-slider/cup-slider.component';
import { ContributingComponent } from './contributing/contributing.component';
import { SourceComponent } from './source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    CupsComponent,
    CupDetailComponent,
    CupSliderComponent,
    ContributingComponent,
    SourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
