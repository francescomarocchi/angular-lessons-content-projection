import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-projector",
  templateUrl: "./parent-projector.component.html",
  styleUrls: ["./parent-projector.component.css"]
})
export class ParentProjectorComponent implements OnInit {
  @Input() showBefore = false;
  constructor() {}

  ngOnInit() {}
}
