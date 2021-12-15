import { Component, Input, OnInit } from "@angular/core";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  @Input() disableAnimation = false;

  navigationLinks = [
    { label: "About me", value: "/about-me" },
    { label: "Projects", value: "/projects" },
    { label: "Blog", value: "/blog" },
    { label: "Whats new ?", value: "/whats-new" },
    { label: "Contact", value: "/contact" },
  ];

  constructor(private _appService: AppService) {}

  ngOnInit(): void {}

  activeLinkChangeCallback(): void {
    this._appService.isPageSelected = true;
  }
}
