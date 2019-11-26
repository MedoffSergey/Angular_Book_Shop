import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { ProductAlertsComponent } from './product/product-alerts/product-alerts.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BookCardComponent } from './product/book-card/book-card.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent,	ProductAlertsComponent, TopBarComponent, BookCardComponent],
  imports: [CommonModule, BrowserModule,  AppRoutingModule, HttpClientModule, ServiceModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
