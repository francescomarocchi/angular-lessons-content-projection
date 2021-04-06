import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stuff-fluff',
  templateUrl: './stuff-fluff.component.html',
  styleUrls: ['./stuff-fluff.component.css']
})
export class StuffFluffComponent implements OnInit {
  @Input() showBefore = false;
  constructor() { }

  ngOnInit() {
  }

}