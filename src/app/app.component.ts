import { Component, OnChanges, OnInit } from "@angular/core";
import { AppService } from "./services/app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private _appService: AppService) {}

  get isPageSelected() {
    return this._appService.isPageSelected;
  }

  get showLandingPage() {
    return this._appService.showLandingPage;
  }

  ngOnInit(): void {
    console.log("aaff");
    this.init();
  }

  ngOnChanges(): void {
    console.log("ffaa");
    this.init();
  }

  init(): void {
    if (!this.isPageSelected) {
      setTimeout(() => {
        this._appService.showLandingPage = true;
      }, 6700);
    }
  }
}
