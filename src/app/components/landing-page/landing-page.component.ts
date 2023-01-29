import { Component, ElementRef, OnChanges, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit, OnChanges {
  @ViewChild("aboutMeDesc") aboutMeDesc: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.startDescriptionAnimation();
  }

  ngOnChanges(): void {
    this.startDescriptionAnimation();
  }

  startDescriptionAnimation(): void {
    let items = ["Engineer", "Dreamer", "Science enthusiast"];
    let itemIdx = 0;
    let itemCharPos = 0;
    let deleteFlag = false;

    const wait = (timeInMs: number) => {
      let endTime = Date.now() + timeInMs;

      while (Date.now() < endTime) {}
    };

    setTimeout(() => {
      setInterval(() => {
        if (itemCharPos == -1) {
          itemIdx = (itemIdx + 1) % items.length;
          itemCharPos = 0;
          deleteFlag = false;
        }

        this.aboutMeDesc.nativeElement.focus();
        this.aboutMeDesc.nativeElement.value = items[itemIdx].slice(0, itemCharPos);

        if (itemCharPos > items[itemIdx].length) {
          wait(1000);
          deleteFlag = true;
        }
        itemCharPos += deleteFlag ? -1 : 1;
      }, 100);
    }, 2000);
  }
}
