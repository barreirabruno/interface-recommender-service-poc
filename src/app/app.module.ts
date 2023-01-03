import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import ptBr from '@angular/common/locales/pt';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SponsorComponentComponent } from './sponsor-component/sponsor-component.component';
import { HttpRequestService } from './sponsor-component/http-request-service';
import { RecommendationComponentComponent } from './recommendation-component/recommendation-component.component';
import { RecommendationBoxComponent } from './recommendation-box/recommendation-box.component';
import { SearchSponsorComponent } from './search-sponsor/search-sponsor.component';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SponsorComponentComponent,
    RecommendationComponentComponent,
    RecommendationBoxComponent,
    SearchSponsorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestService,
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
