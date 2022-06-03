import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, of } from "rxjs";
import { ApiInsiderSentiment } from "src/app/models/api-insider-sentiment";
import { SymbolAndName } from "src/app/models/symbolAndName";
import { FinnhubApiService } from "src/app/services/finnhub-api.service";

@Component({
  selector: "app-sentiment",
  templateUrl: "./sentiment.component.html",
  styleUrls: ["./sentiment.component.scss"],
})
export class SentimentComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: FinnhubApiService) {}

  symbol: string = "";
  symbolName$: Observable<SymbolAndName> = new Observable();
  pastThreeMonthsSentiment$: Observable<ApiInsiderSentiment> = of(new ApiInsiderSentiment());

  ngOnInit(): void {
    this.symbol = this.route.snapshot.params["symbol"];
    this.symbolName$ = this.apiService.getCompanyNameBySymbol(this.symbol);

    const today = new Date();
    const threeMonthsAgo = new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 3,
      new Date().getDate()
    );
    this.pastThreeMonthsSentiment$ = this.apiService.getInsiderSentiment(
      this.symbol,
      this.getDateString(threeMonthsAgo),
      this.getDateString(today)
    );
  }

  getDateString(date: Date): string {
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().split("T")[0];
  }

  toMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }
}
