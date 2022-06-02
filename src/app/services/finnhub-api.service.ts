import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { ApiInsiderSentiment } from "../models/api-insider-sentiment";
import { ApiQuote } from "../models/api-quote";
import { ApiSymbolLookup } from "../models/api-symbol-lookup";
import { Quote } from "../models/quote";
import { SymbolAndName } from "../models/symbolAndName";

@Injectable({
  providedIn: "root",
})
export class FinnhubApiService {
  constructor(private http: HttpClient) {}

  private apiKey = "bu4f8kn48v6uehqi3cqg";
  private baseUrl = "https://finnhub.io/api/v1";

  getQuoteDataBySymbol(symbol: string): Observable<Quote> {
    const url = `${this.baseUrl}/quote?symbol=${symbol}&token=${this.apiKey}`;
    return this.http.get<ApiQuote>(url).pipe(
      map((apiQuote) => {
        return new Quote(
          apiQuote.c,
          apiQuote.d,
          apiQuote.dp,
          apiQuote.h,
          apiQuote.l,
          apiQuote.o,
          apiQuote.pc
        );
      }),
      catchError(this.handleError<Quote>("getQuoteDataBySymbol"))
    );
  }

  getCompanyNameBySymbol(symbol: string): Observable<SymbolAndName> {
    const url = `${this.baseUrl}/search?q=${symbol}&token=${this.apiKey}`;
    return this.http.get<ApiSymbolLookup>(url).pipe(
      map((lookup) => {
        const results = lookup.result;
        const symbolResult = results.filter((searchResult) => {
          return searchResult.symbol.toUpperCase() == symbol.toUpperCase();
        });
        return new SymbolAndName(symbol, symbolResult[0].description);
      }),
      catchError(this.handleError<SymbolAndName>("getCompanyNameBySymbol"))
    );
  }

  getInsiderSentiment(symbol: string, fromDateString: string, toDateString: string) {
    const url = `${this.baseUrl}/stock/insider-sentiment?symbol=${symbol}&from=${fromDateString}&to=${toDateString}&token=${this.apiKey}`;
    return this.http
      .get<ApiInsiderSentiment>(url)
      .pipe(catchError(this.handleError<ApiInsiderSentiment>()));
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
