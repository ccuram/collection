import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SearchComponent } from './search/search.component';
import { CustomSearchPipe } from './search/custom-search.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { FooterComponent } from './ui/footer/footer.component';
import { SocialComponent } from './util/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    CupsComponent,
    CupDetailComponent,
    CupSliderComponent,
    ContributingComponent,
    SourceComponent,
    SearchComponent,
    CustomSearchPipe,
    OrderPipe,
    FooterComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
