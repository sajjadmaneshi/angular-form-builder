import {Injectable} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {BaseFormElement} from "../base-form-elements";
import {AccessLevelService} from "./access-level.service";
import {AccessLevel} from "../enums/access-level";


@Injectable()
export class FormControlService {
  accessLevel!: AccessLevel | string | null;

  constructor(private _accessLevelService: AccessLevelService) {
    this._accessLevelService.accessLevel$.subscribe(accessLevel => this.accessLevel = accessLevel)
  }

  toFormGroup(formControls: BaseFormElement<string>[]) {
    const group: any = {};

    formControls.forEach(formControl => {
      group[formControl.key] = this._checkValidators(formControl);
    });
    return new FormGroup(group);
  }

  private _checkValidators(baseFormElement: BaseFormElement<string>): FormControl {

    const formControl = new FormControl({
      value: baseFormElement.value == undefined ? null : baseFormElement.value
      , disabled: baseFormElement.disabled
    });
    const validators: ValidatorFn[] = [];
    if (baseFormElement.required) {
      validators.push(Validators.required);
    }
    if (baseFormElement.pattern) {
      validators.push(Validators.pattern(baseFormElement.pattern));
    }
    if (validators.length > 0) {
      formControl.setValidators(validators);
      formControl.updateValueAndValidity();
    }


    return formControl;
  }
}
