import { Component, VERSION } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  isLeft$ = new BehaviorSubject(true);

  toggle(): void {
    const newValue = !this.isLeft$.value;
    this.isLeft$.next(newValue);
  }
}
