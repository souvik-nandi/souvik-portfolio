import { Router } from "@angular/router";
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from "@angular/core";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-signature-loader",
  templateUrl: "./signature-loader.component.html",
  styleUrls: ["./signature-loader.component.scss"],
})
export class SignatureLoaderComponent implements OnInit, AfterViewInit {
  @Input() disableAnimation = false;

  constructor(private _router: Router, private _appService: AppService) {}

  @ViewChild("signatureContainer") signatureContainer: ElementRef;

  ngOnInit() {
    this.startLoadingAnimation(this.signatureContainer?.nativeElement);
  }

  ngAfterViewInit() {
    this.startLoadingAnimation(this.signatureContainer?.nativeElement);
  }

  redirectToLandingPage(): void {
    this._router.navigate([""]);

    setTimeout(() => {
      this._appService.isPageSelected = false;
      setTimeout(() => {
        this._appService.showLandingPage = true;
      }, 6700);
    }, 100);
  }

  startLoadingAnimation(domElement: any) {
    if (domElement) {
      let paths: NodeListOf<SVGPathElement> = domElement.querySelectorAll("path");

      function animatePath(path: SVGPathElement, animation: string, length: number) {
        path.style.transition = "none";
        path.style.strokeDasharray = length + " " + length;
        path.style.strokeDashoffset = length.toString();
        path.style.stroke = "rgb(255,255,255)";
        path.getBoundingClientRect();
        path.style.transition = animation;
        path.style.strokeDashoffset = "0";
      }

      let counter = 0;

      setTimeout(
        () => {
          paths.forEach((path) => {
            let length = path.getTotalLength();
            let delayTimeInMS = this.disableAnimation ? 0 : 3 * length;

            setTimeout(() => {
              animatePath(path, `stroke-dashoffset ${delayTimeInMS / 1000}s ease-in-out`, length);
            }, counter);

            counter += delayTimeInMS;
          });
        },
        this.disableAnimation ? 0 : 500,
      );
    }
  }
}
