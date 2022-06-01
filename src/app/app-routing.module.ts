import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTrackerComponent } from "./components/stock-tracker/stock-tracker.component";

const routes: Routes = [{ path: "", component: StockTrackerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
