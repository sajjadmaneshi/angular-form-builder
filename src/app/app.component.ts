import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import {FormBuilderService} from "./helpers/services/form-builder.service";
import {BaseForm} from "./helpers/base-form";
import { AccessLevelService} from "./helpers/services/access-level.service";
import {AccessLevel} from "./helpers/enums/access-level";

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  providers:  [FormBuilderService]
})
export class AppComponent {
  accessLevelEnum=AccessLevel;
  formData$: Observable<BaseForm<any>>;
  accessLevel!:AccessLevel;

  constructor(private _formBuilderService: FormBuilderService,public accessLevelService:AccessLevelService) {
    this.formData$ = _formBuilderService.getForm();
   this.accessLevelService.accessLevel$.subscribe((accessLevel)=>this.accessLevel=accessLevel)
  }

  changeAccess(accessLevel:AccessLevel){
    this.accessLevelService.setUserAccess(accessLevel);
    window.location.reload()
  }

}
