import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  getSymbols(): string | null {
    return localStorage.getItem("symbolsJSON");
  }

  addSymbol(symbol: string) {
    const getSymbolsResult = this.getSymbols();
    if (getSymbolsResult) {
      const symbols: string[] = JSON.parse(getSymbolsResult);
      localStorage.setItem("symbolsJSON", JSON.stringify(symbols.concat(symbol)));
    } else {
      localStorage.setItem("symbolsJSON", JSON.stringify([symbol]));
    }
  }
}
