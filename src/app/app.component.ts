import { Component } from "@angular/core";
import { AppService } from "./services/app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private _appService: AppService) {}

  get isPageSelected() {
    return this._appService.isPageSelected;
  }
}
