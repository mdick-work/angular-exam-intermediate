import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-stocks-display",
  templateUrl: "./stocks-display.component.html",
  styleUrls: ["./stocks-display.component.scss"],
})
export class StocksDisplayComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  public stockSymbols: string[] = [];

  ngOnInit(): void {
    const storageSymbols = this.localStorageService.getSymbols();
    this.stockSymbols = storageSymbols ? storageSymbols : [];
  }
}
