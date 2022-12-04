import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DynamicFormControlComponent } from './components/dynamic-form-control/dynamic-form-control.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DatePickerRangeComponent} from "./components/date-picker-range/date-picker-range.component";
import { HeaderComponent } from './components/header/header.component';
import {AccessLevelService} from "./helpers/services/access-level.service";


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormControlComponent,
    DynamicFormComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    DatePickerRangeComponent,

  ],
  providers: [AccessLevelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
