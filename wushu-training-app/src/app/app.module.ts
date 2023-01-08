import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomButtonModule } from 'library/components/custom-button/custom-button.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WelcomeModule, CustomButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
