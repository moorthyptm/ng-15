import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DisplayComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
