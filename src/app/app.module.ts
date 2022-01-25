import { LocationStrategy, PathLocationStrategy,registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import localeEs from '@angular/common/locales/es'
import { AuthGuard } from '@data/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './data/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
