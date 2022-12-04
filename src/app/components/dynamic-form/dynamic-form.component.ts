import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {BaseFormElement} from "../../helpers/base-form-elements";
import {FormControlService} from "../../helpers/services/form-control.service";
import {BaseForm} from "../../helpers/base-form";
import {ActionTypes} from "../../helpers/enums/action-types";
import {AccessLevelService} from "../../helpers/services/access-level.service";
import {AccessLevel} from "../../helpers/enums/access-level";


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [FormControlService]
})
export class DynamicFormComponent implements OnInit {

  formIsSubmitted = false;

  @Input() formData!: BaseForm<any> | null;

  form!: FormGroup;
  payLoad = '';
  actionType = ActionTypes;
  accessLevel!: AccessLevel;

  constructor(private _formBuilderService: FormControlService, private _accessLevelService: AccessLevelService) {
    this._accessLevelService.accessLevel$.subscribe((accessLevel) => {
      this.accessLevel = accessLevel
    })
  }

  ngOnInit() {
    this.formData?.fields.subscribe(formField =>
      this.form = this._formBuilderService.toFormGroup(formField as BaseFormElement<string>[]))
  }

  onSubmit() {
    if (this.formData?.beforeSubmit) {
      this.formData.beforeSubmit(this);
    }
    this.formIsSubmitted = true;
    if (this.formData?.afterSubmit()) {
      this.formData?.afterSubmit(this);
    }
    if (this.form.valid) {
      this.formData?.submit();
    }
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }


}
