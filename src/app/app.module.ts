import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeCalcIndexComponent } from './range-calc-index/range-calc-index.component';
import { RangeCalcStocksComponent } from './range-calc-stocks/range-calc-stocks.component';
import { DataUpdaterComponent } from './data-updater/data-updater.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeCalcIndexComponent,
    RangeCalcStocksComponent,
    DataUpdaterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
