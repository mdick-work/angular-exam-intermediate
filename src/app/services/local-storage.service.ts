import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  constructor() {}

  getSymbols(): string[] | null {
    const symbolsJSON = localStorage.getItem("symbolsJSON");
    if (symbolsJSON) {
      return JSON.parse(symbolsJSON);
    } else {
      return null;
    }
  }

  addSymbol(symbol: string) {
    const getSymbolsResult = this.getSymbols();
    if (getSymbolsResult) {
      localStorage.setItem("symbolsJSON", JSON.stringify(getSymbolsResult.concat(symbol)));
    } else {
      localStorage.setItem("symbolsJSON", JSON.stringify([symbol]));
    }
  }
}
