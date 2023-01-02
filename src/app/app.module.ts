import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SponsorComponentComponent } from './sponsor-component/sponsor-component.component';
import { HttpRequestService } from './sponsor-component/http-request-service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SponsorComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
