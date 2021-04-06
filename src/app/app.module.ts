import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ParentProjectorComponent } from "./parent-projector/parent-projector.component";
import { ChildrenProjectorComponent } from "./children-projector/children-projector.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentProjectorComponent,
    ChildrenProjectorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
