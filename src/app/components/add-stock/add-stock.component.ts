import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-add-stock",
  templateUrl: "./add-stock.component.html",
  styleUrls: ["./add-stock.component.scss"],
})
export class AddStockComponent implements OnInit {
  constructor(private localStorageService: LocalStorageService) {}

  public stockSymbol: string = "";

  ngOnInit(): void {}

  trackStock(): void {
    if (this.stockSymbol) {
      this.localStorageService.addSymbol(this.stockSymbol);
    }
  }
}
