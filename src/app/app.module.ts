import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {APIService} from './api.service';
import {AppComponent} from './ls-root/app.component';
import {LsLandingComponent} from './ls-landing/ls-landing.component';
import {LsSearchRuleComponent} from './ls-landing/searchRule/searchRule.component';
import {LsSearchLaunchesComponent} from './ls-landing/searchLaunches/searchLaunches.component';


@NgModule({
  declarations: [
    AppComponent,
    LsLandingComponent,
    LsSearchRuleComponent,
    LsSearchLaunchesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [
    APIService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
