import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StuffFluffComponent } from "./stuff-fluff/stuff-fluff.component";
import { StuffChildrenComponent } from "./stuff-children/stuff-children.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StuffFluffComponent, StuffChildrenComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
