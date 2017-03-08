import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceComponent } from "./service/service.component";
import { CmpAComponent } from "./service";
import { CmpBComponent } from "./service";

import { LogService } from './service';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
