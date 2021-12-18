import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppService {
  isPageSelected = false;
  showLandingPage = false;

  constructor() {}
}
