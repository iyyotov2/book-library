import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BookModule } from './book/book.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorProvider } from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    BookModule,
    SharedModule
  ],
  providers: [
    AppInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }