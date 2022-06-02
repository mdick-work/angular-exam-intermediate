import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AddStockComponent } from "./components/add-stock/add-stock.component";
import { StocksDisplayComponent } from "./components/stocks-display/stocks-display.component";
import { StockTrackerComponent } from "./components/stock-tracker/stock-tracker.component";
import { SentimentComponent } from './components/sentiment/sentiment.component';

@NgModule({
  declarations: [AppComponent, AddStockComponent, StocksDisplayComponent, StockTrackerComponent, SentimentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
