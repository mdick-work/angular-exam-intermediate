import { Quote } from "./quote";
import { SymbolAndName } from "./symbolAndName";

export class QuoteWithName {
  symbolAndName: SymbolAndName = new SymbolAndName("", "");
  quote: Quote = new Quote();
  constructor(symbolAndName: SymbolAndName, quote: Quote) {
    this.symbolAndName = symbolAndName;
    this.quote = quote;
  }
}
