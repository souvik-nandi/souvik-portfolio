import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { delay } from "rxjs";
import { TagCloud } from "TagCloud";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const myTags = [
      "JavaScript",
      "CSS",
      "HTML",
      "C",
      "C++",
      "React",
      "Python",
      "Java",
      "git",
      "django",
      "Node.js",
      "OpenCV",
      "GCP",
      "MySQL",
      "jQuery",
    ];

    //To change the color of text randomly
    var colors = ["#34A853", "#FBBC05", "#4285F4", "#7FBC00", "FFBA01", "01A6F0"];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
  }
}
