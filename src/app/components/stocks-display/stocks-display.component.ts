import { Quote } from "src/app/models/quote";
import { Component, OnInit } from "@angular/core";
import { catchError, forkJoin, map, Observable, of, Subscription } from "rxjs";
import { FinnhubApiService } from "src/app/services/finnhub-api.service";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { QuoteWithName } from "src/app/models/quoteWithName";

@Component({
  selector: "app-stocks-display",
  templateUrl: "./stocks-display.component.html",
  styleUrls: ["./stocks-display.component.scss"],
})
export class StocksDisplayComponent implements OnInit {
  constructor(
    private localStorageService: LocalStorageService,
    private apiService: FinnhubApiService
  ) {}

  private stockSymbols: string[] = [];
  private stockObservables$: Observable<QuoteWithName>[] = [];
  private stockSubscriptions$: Subscription[] = [];
  public quotesWithNames: QuoteWithName[] = [];

  ngOnInit(): void {
    const storageSymbols = this.localStorageService.getSymbols();
    this.stockSymbols = storageSymbols ? storageSymbols : [];

    this.stockSymbols.forEach((symbol) => {
      this.stockObservables$.push(
        forkJoin([
          this.apiService.getQuoteDataBySymbol(symbol),
          this.apiService.getCompanyNameBySymbol(symbol),
        ]).pipe(
          map((result) => {
            return new QuoteWithName(result[1], result[0]);
          })
        )
      );
    });
    this.stockObservables$.forEach((stockObservable) => {
      const stockSubscription = stockObservable.subscribe((quoteWithName) => {
        this.quotesWithNames.push(quoteWithName);
      });
      this.stockSubscriptions$.push(stockSubscription);
    });
  }

  deleteStock(symbol: string) {
    this.quotesWithNames = this.quotesWithNames.filter(
      (e) => e.symbolAndName.symbol.toUpperCase() != symbol
    );
    this.localStorageService.deleteSymbol(symbol);
  }
}
