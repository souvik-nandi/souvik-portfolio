import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-signature-loader",
  templateUrl: "./signature-loader.component.html",
  styleUrls: ["./signature-loader.component.scss"],
})
export class SignatureLoaderComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild("signatureContainer") signatureContainer: ElementRef;

  ngOnInit() {
    this.startLoadingAnimation(this.signatureContainer?.nativeElement);
  }

  ngAfterViewInit() {
    this.startLoadingAnimation(this.signatureContainer?.nativeElement);
  }

  startLoadingAnimation(domElement: any) {
    if (domElement) {
      let paths: NodeListOf<SVGPathElement> = domElement.querySelectorAll("path");

      function animatePath(path: SVGPathElement, animation: string, length: number) {
        path.style.transition = "none";
        path.style.strokeDasharray = length + " " + length;
        path.style.strokeDashoffset = length.toString();
        path.style.stroke = "rgb(0,0,0)";
        path.getBoundingClientRect();
        path.style.transition = animation;
        path.style.strokeDashoffset = "0";
      }

      let counter = 0;

      paths.forEach((path) => {
        let length = path.getTotalLength();
        let delayTimeInMS = 3 * length;

        setTimeout(() => {
          animatePath(path, `stroke-dashoffset ${delayTimeInMS / 1000}s ease-in-out`, length);
        }, counter);

        counter += delayTimeInMS;
      });
    }
  }
}
